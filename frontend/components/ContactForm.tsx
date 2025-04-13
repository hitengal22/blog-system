import Button from "./ui/Button";
import Input from "./ui/input";
import Label from "./ui/label";
import TextArea from "./ui/Textarea";

interface ContactFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    formData: {
        name: string;
        email: string;
        message: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactForm({ handleSubmit, formData, handleChange }: ContactFormProps) {
    return (
        <form onSubmit={handleSubmit} className="contact-form space-y-4">
            <div>
                <Label htmlFor="name">
                    Name:
                </Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="email">
                    Email:
                </Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="message">
                    Message:
                </Label>
                <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button
                type="submit"
            >
                Send
            </Button>
        </form>
    )
}