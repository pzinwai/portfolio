'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import React from 'react'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  const fromEmail = process.env.FROM_EMAIL
  const contactEmail = process.env.CONTACT_EMAIL

  if (!fromEmail || !contactEmail) {
    throw new Error(
      'Environment variables FROM_EMAIL or CONTACT_EMAIL are not defined'
    )
  }

  try {
    const { name, email, message } = result.data
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: React.createElement(ContactFormEmail, { name, email, message }) // Ensure this is a ReactNode
    })

    if (!emailData || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
