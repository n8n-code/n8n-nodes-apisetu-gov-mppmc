import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovMppmcApi implements ICredentialType {
        name = 'N8nDevApisetuGovMppmcApi';

        displayName = 'Apisetu Gov Mppmc API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovMppmc/apisetu-gov-mppmc.svg', dark: 'file:../nodes/ApisetuGovMppmc/apisetu-gov-mppmc.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/mppmc/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/mppmc/v3',
                        description: 'The base URL of your Apisetu Gov Mppmc API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
