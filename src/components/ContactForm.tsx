"use client";

import { Button, Flex, Heading, Input, Text, Background, Textarea } from '@/once-ui/components';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type ContactFormProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
    email?: string;
}

export const ContactForm = (
    { contact }: { contact: ContactFormProps }
) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const t = useTranslations();

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                return value.trim() === '' ? 'Name is required' : '';
            case 'email':
                if (value.trim() === '') return 'Email is required';
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailPattern.test(value) ? 'Please enter a valid email address' : '';
            case 'phone':
                // Phone is optional, but if provided, should be valid
                if (value.trim() === '') return '';
                const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
                return !phonePattern.test(value.replace(/\s/g, '')) ? 'Please enter a valid phone number' : '';
            case 'message':
                return value.trim() === '' ? 'Message is required' : '';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields
        const newErrors: Record<string, string> = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setErrors({});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Flex
            style={{ overflow: 'hidden' }}
            position="relative"
            fillWidth padding="xl" radius="l" marginBottom="m"
            direction="column" alignItems="center" align="center"
            background="surface" border="neutral-medium" borderStyle="solid-1">
            <Background
                position="absolute"
                mask="topRight"
                gradient={{
                    display: true,
                    opacity: 0.4
                }}
                dots={{
                    display: false,
                }}
                lines={{
                    display: false,
                }} />
            <Heading style={{ position: 'relative' }}
                marginBottom="s"
                variant="display-strong-xs">
                {contact.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {contact.description}
            </Text>

            {contact.email && (
                <Flex
                    style={{
                        position: 'relative',
                        zIndex: 1
                    }}
                    direction="column" alignItems="center" gap="m" marginBottom="m">
                    <Button
                        href={`mailto:${contact.email}`}
                        prefixIcon="email"
                        label={contact.email}
                        size="m"
                        variant="secondary" />
                    <Text variant="body-default-s" onBackground="neutral-weak">OR</Text>
                </Flex>
            )}

            {submitStatus === 'success' && (
                <Flex
                    style={{ position: 'relative' }}
                    fillWidth maxWidth={24}
                    padding="m"
                    radius="m"
                    background="success-weak"
                    border="success-medium"
                    borderStyle="solid-1"
                    marginBottom="m">
                    <Text onBackground="success-medium" variant="body-default-s">
                        Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </Text>
                </Flex>
            )}

            {submitStatus === 'error' && (
                <Flex
                    style={{ position: 'relative' }}
                    fillWidth maxWidth={24}
                    padding="m"
                    radius="m"
                    background="danger-weak"
                    border="danger-medium"
                    borderStyle="solid-1"
                    marginBottom="m">
                    <Text onBackground="danger-medium" variant="body-default-s">
                        Sorry, there was an error sending your message. Please try again or contact me directly at dharmikgohil.dev@gmail.com
                    </Text>
                </Flex>
            )}

            <form
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                onSubmit={handleSubmit}>
                <Flex
                    fillWidth maxWidth={24} gap="m"
                    direction="column">
                    <Flex gap="m" mobileDirection="column">
                        <Input
                            id="contact-name"
                            label="Name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.name}
                            required />
                        <Input
                            id="contact-email"
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            required />
                    </Flex>
                    <Input
                        id="contact-phone"
                        label="Phone Number (Optional)"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phone} />
                    <Textarea
                        id="contact-message"
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.message}
                        required
                        lines={4} />
                    <Flex
                        height="48" alignItems="center">
                        <Button
                            type="submit"
                            size="m"
                            fillWidth
                            disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : t("contact.button")}
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    )
} 