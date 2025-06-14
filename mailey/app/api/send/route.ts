import { formSchema } from "@/lib/schemas";
import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parseResult = formSchema.safeParse(body);

    if (!parseResult.success) {
      return Response.json(
        { error: parseResult.error.format() },
        { status: 400 }
      );
    }

    const emailFormData = parseResult.data;
    const emailSubject = parseResult.data.subject;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [`ethan.yu@utexas.edu`],
      subject: emailSubject,
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        lastName: emailFormData.lastName,
        email: emailFormData.email,
        message: emailFormData.message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
