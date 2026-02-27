import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  name: string;
  phone: string;
  email: string;
  service: string;
  dateTime: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitInquiry(data.name, data.phone, data.email, data.service, data.dateTime);
    },
  });
}
