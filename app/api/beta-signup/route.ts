import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

interface BetaSignupRequest {
  name: string
  email: string
  organization: string
  useCase: string
  needs: string[]
}

const escapeHtml = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const FONT = "'Poppins', 'Helvetica Neue', Arial, sans-serif"

/** Plantilla de email con la marca Statera (crema, borde Mantequilla, burdeos). */
const brandedEmail = (title: string, body: string) => `
<div style="background:#fff7e2;padding:32px 16px;font-family:${FONT};color:#220713">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #ffe9af;border-radius:14px;overflow:hidden">
    <div style="background:#4c102a;padding:20px 32px">
      <span style="font-family:${FONT};font-weight:300;letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:#ffe9af">Statera Analytics · Beta</span>
    </div>
    <div style="padding:32px;font-weight:300;line-height:1.65;font-size:15px">
      <h2 style="margin:0 0 16px;color:#4c102a;font-weight:500;font-size:22px">${title}</h2>
      ${body}
    </div>
    <div style="border-top:1px solid #ffe9af;padding:16px 32px;text-align:right">
      <a href="https://statera.com" style="font-family:${FONT};font-weight:300;font-size:12px;letter-spacing:.06em;color:#761941;text-decoration:none">Powered by <b style="font-weight:500;color:#4c102a;letter-spacing:.02em">Statera</b></a>
    </div>
  </div>
</div>`

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend only at runtime
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const body: BetaSignupRequest = await request.json()

    const { name, email, organization, useCase, needs } = body

    // Validate
    if (!name || !email || !useCase || !Array.isArray(needs) || needs.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      organization: escapeHtml(organization || 'No especificada'),
      needs: needs.map((n) => escapeHtml(String(n))).join(', '),
      useCase: escapeHtml(useCase).replace(/\n/g, '<br>'),
    }

    // Send email to Statera team
    const adminEmailResult = await resend.emails.send({
      from: 'Statera <onboarding@resend.dev>',
      to: 'statera.main@gmail.com',
      subject: `[Beta] Nueva solicitud de ${name}`,
      html: brandedEmail(
        'Nueva solicitud de acceso',
        `<p><strong>Nombre:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Organización:</strong> ${safe.organization}</p>
        <p><strong>Necesidades:</strong> ${safe.needs}</p>
        <p style="color:#761941;margin-top:24px"><strong>Caso de uso</strong></p>
        <p>${safe.useCase}</p>`
      ),
    })

    if (adminEmailResult.error) {
      console.error('Error sending admin email:', adminEmailResult.error)
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: 'Statera <onboarding@resend.dev>',
        to: email,
        subject: 'Hemos recibido tu solicitud · Statera Analytics',
        html: brandedEmail(
          `Hola, ${safe.name}`,
          `<p>Hemos recibido tu solicitud de acceso a la beta privada de Statera Analytics.</p>
          <p>Nuestro equipo la revisará en los próximos días y se pondrá en contacto contigo.</p>
          <div style="margin:24px 0;padding:16px 20px;background:#fff7e2;border:1px solid #ffe9af;border-radius:10px">
            <p style="margin:0 0 8px;color:#761941;font-size:12px;letter-spacing:.18em;text-transform:uppercase">Resumen de tu solicitud</p>
            <p style="margin:0 0 8px"><strong style="font-weight:500;color:#4c102a">Intereses:</strong> ${safe.needs}</p>
            <p style="margin:0"><strong style="font-weight:500;color:#4c102a">Caso de uso:</strong><br>${safe.useCase}</p>
          </div>
          <p>Un saludo,<br><span style="color:#4c102a;font-weight:500">El equipo de Statera</span></p>`
        ),
      })
    } catch (err) {
      console.error('Error sending confirmation email:', err)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      { success: true, message: 'Solicitud enviada correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
