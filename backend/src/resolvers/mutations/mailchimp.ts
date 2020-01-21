import { MutationResolvers } from '../../generated/graphqlgen';

const MailchimpApi = require('mailchimp-api-v3');

const LIST_ID = '90ec9a1be6';

interface MailChimpResolvers {
  subscribeToEmailList: MutationResolvers.SubscribeToEmailListResolver;
}

const apiKey = process.env.MAILCHIMP_API_KEY;
export const mailchimp: MailChimpResolvers = {
  async subscribeToEmailList(parents, args, ctx) {
    const mailchimp = new MailchimpApi(apiKey);

    try {
      const response = await mailchimp.post(`/lists/${LIST_ID}/members`, {
        email_address: args.email,
        status: 'subscribed',
      });
      return {
        status: response.status,
      };
    } catch (error) {
      if (error.status === 400 && error.title === 'Member Exists') {
        throw new Error('Already Subscribed');
      }
      throw error;
    }
  },
};
