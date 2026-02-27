import { useState } from 'react';
import { Phone, Clock, CheckCircle, AlertCircle, Loader2, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useSubmitInquiry } from '@/hooks/useQueries';

const serviceOptions = [
  { value: 'basic-exterior-wash', label: 'Basic Exterior Wash — ₹599' },
  { value: 'interior-exterior', label: 'Interior + Exterior — ₹1499' },
  { value: 'bike-wash', label: 'Bike Wash — ₹299' },
  { value: 'doorstep-detailing', label: 'Doorstep Detailing — Get a Quote' },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  dateTime: string;
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  dateTime: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitInquiry, isPending, isError, error } = useSubmitInquiry();

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.dateTime) newErrors.dateTime = 'Please select a preferred date & time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    submitInquiry(form, {
      onSuccess: () => {
        setSubmitted(true);
        setForm(initialForm);
      },
    });
  }

  return (
    <div className="bg-garage-dark py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-garage-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display font-semibold text-garage-gold text-xs tracking-[0.4em] uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase text-garage-light leading-none">
            Book Your Detail
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-garage-gold" />
          <p className="mt-6 text-garage-muted text-base sm:text-lg max-w-xl mx-auto">
            Ready to transform your vehicle? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-garage-panel border border-garage-gold/10">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-garage-gold/10">
                <Phone className="h-5 w-5 text-garage-gold" />
              </div>
              <div>
                <p className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted mb-1">
                  Phone
                </p>
                <a
                  href="tel:+918527230903"
                  className="font-display font-black text-garage-light text-base hover:text-garage-gold transition-colors duration-200"
                >
                  +91 8527230903
                </a>
                <p className="text-sm text-garage-muted mt-0.5">Tap to call us</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 p-5 bg-garage-panel border border-garage-gold/10">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-garage-gold/10">
                <Clock className="h-5 w-5 text-garage-gold" />
              </div>
              <div>
                <p className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted mb-1">
                  Working Hours
                </p>
                <p className="font-display font-black text-garage-light text-base">
                  Mon – Sun
                </p>
                <p className="text-sm text-garage-muted mt-0.5">8:00 AM – 4:00 PM</p>
              </div>
            </div>

            <div className="p-5 bg-garage-gold/10 border border-garage-gold/30">
              <p className="font-display font-bold text-sm text-garage-gold uppercase tracking-wider mb-2">
                Free Estimates
              </p>
              <p className="text-sm text-garage-muted leading-relaxed">
                Not sure which package is right for you? Contact us and we'll help you choose the best option for your vehicle.
              </p>
            </div>

            {/* Doorstep callout */}
            <div className="p-5 bg-garage-panel border border-garage-gold/20 flex items-start gap-3">
              <MapPin className="h-5 w-5 text-garage-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-bold text-sm text-garage-gold uppercase tracking-wider mb-1">
                  Doorstep Service
                </p>
                <p className="text-sm text-garage-muted leading-relaxed">
                  We come to you! Select <span className="text-garage-gold font-semibold">Doorstep Detailing</span> in the form and we'll arrange a visit at your location.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 bg-garage-panel border border-garage-gold/20">
                <div className="w-16 h-16 flex items-center justify-center bg-garage-gold/10 mb-6">
                  <CheckCircle className="h-8 w-8 text-garage-gold" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-garage-light mb-3">
                  Booking Received!
                </h3>
                <p className="text-garage-muted max-w-sm leading-relaxed mb-8">
                  Thank you for choosing Kare Detailing Garage. We'll review your request and contact you within 24 hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-garage-gold/50 text-garage-gold font-display font-bold text-sm tracking-widest uppercase hover:bg-garage-gold/10 transition-colors duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-garage-panel border border-garage-gold/10 p-6 sm:p-8 space-y-6">
                {isError && (
                  <Alert variant="destructive" className="border-red-500/50 bg-red-500/10">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle className="font-display font-bold uppercase tracking-wider">Submission Failed</AlertTitle>
                    <AlertDescription className="text-sm">
                      {error instanceof Error ? error.message : 'Something went wrong. Please try again.'}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="bg-garage-dark border-garage-gold/20 text-garage-light placeholder:text-garage-muted/50 focus:border-garage-gold focus:ring-garage-gold/20 rounded-none h-11"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 font-display">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="bg-garage-dark border-garage-gold/20 text-garage-light placeholder:text-garage-muted/50 focus:border-garage-gold focus:ring-garage-gold/20 rounded-none h-11"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 font-display">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-garage-dark border-garage-gold/20 text-garage-light placeholder:text-garage-muted/50 focus:border-garage-gold focus:ring-garage-gold/20 rounded-none h-11"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 font-display">{errors.email}</p>
                  )}
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted">
                    Select Service *
                  </Label>
                  <Select value={form.service} onValueChange={(val) => handleChange('service', val)}>
                    <SelectTrigger className="bg-garage-dark border-garage-gold/20 text-garage-light focus:border-garage-gold focus:ring-garage-gold/20 rounded-none h-11 data-[placeholder]:text-garage-muted/50">
                      <SelectValue placeholder="Choose a detailing package" />
                    </SelectTrigger>
                    <SelectContent className="bg-garage-panel border-garage-gold/20 text-garage-light">
                      {serviceOptions.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="focus:bg-garage-gold/10 focus:text-garage-gold cursor-pointer"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-xs text-red-400 font-display">{errors.service}</p>
                  )}
                </div>

                {/* Date & Time */}
                <div className="space-y-2">
                  <Label htmlFor="dateTime" className="font-display font-bold text-xs tracking-widest uppercase text-garage-muted">
                    Preferred Date & Time *
                  </Label>
                  <Input
                    id="dateTime"
                    type="datetime-local"
                    value={form.dateTime}
                    onChange={(e) => handleChange('dateTime', e.target.value)}
                    className="bg-garage-dark border-garage-gold/20 text-garage-light focus:border-garage-gold focus:ring-garage-gold/20 rounded-none h-11 [color-scheme:dark]"
                  />
                  {errors.dateTime && (
                    <p className="text-xs text-red-400 font-display">{errors.dateTime}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 bg-garage-gold text-garage-dark font-display font-black text-sm tracking-[0.25em] uppercase transition-all duration-200 hover:bg-garage-gold-light disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
