'use client';
import Alert from '@/components/Alert';
import ContactForm from '@/components/ContactForm';
import { contact } from '@/lib/Network';
import { ContactResponse } from '@/lib/types';
import { Metadata } from 'next';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response: ContactResponse = await contact(formData.name, formData.email, formData.message);
            if (response.status === 'success') {
                setIsSuccess(true);
                setIsError(false);
                setFormData({ name: '', email: '', message: '' });
            }
            else {
                setIsError(true);
                setIsSuccess(false);
                setErrorMessage(response.error as string);
            }
        } catch (error: any) {
            setIsError(true);
            setIsSuccess(false);
            setErrorMessage(error?.message|| '' as string);
        }
    };

    return (
        <div className="contact-page min-h-full flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
                {isSuccess && (<Alert type="success" message="Your message has been sent successfully!" />)}
                {isError && (<Alert type="danger" message={errorMessage} />)}
                {!isSuccess && !isError && (
                    <ContactForm
                        handleSubmit={handleSubmit}
                        formData={formData}
                        handleChange={handleChange}
                    />)}

            </div>
        </div>
    );
}