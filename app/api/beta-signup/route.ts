import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

interface BetaSignupRequest {
  name: string
  email: string
  organization: string
  useCase: string
  needs: string[]
}

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
    if (!name || !email || !useCase || needs.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to Statera team
    const adminEmailResult = await resend.emails.send({
      from: 'Statera <onboarding@resend.dev>',
      to: 'statera.main@gmail.com',
      subject: `[Beta] Nueva solicitud de ${name}`,
      html: `
        <h2>Nueva Solicitud de Acceso a Beta</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organización:</strong> ${organization || 'No especificada'}</p>
        <p><strong>Necesidades:</strong> ${needs.join(', ')}</p>
        <h3>Caso de Uso:</h3>
        <p>${useCase.replace(/\n/g, '<br>')}</p>
      `,
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
        subject: 'Solicitud recibida - Statera Analytics Beta',
        html: `
          <h2>¡Hola ${name}!</h2>
          <p>Hemos recibido tu solicitud de acceso a la beta privada de Statera Analytics.</p>
          <p>Nuestro equipo revisará tu solicitud en los próximos días y se pondrá en contacto contigo.</p>
          <hr>
          <p><strong>Resumen de tu solicitud:</strong></p>
          <p><strong>Necesidades:</strong> ${needs.join(', ')}</p>
          <p><strong>Caso de uso:</strong></p>
          <p>${useCase.replace(/\n/g, '<br>')}</p>
          <hr>
          <p>Saludos,<br>El equipo de Statera</p>
        `,
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
