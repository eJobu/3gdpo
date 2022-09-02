import { dpoApi } from 'main'
import { httpMethod } from 'types'

export async function createAsimplePayment (
  companyToken: string,
  amount: number,
  currency: string,
  companyRef: string,
  redirectUrl: string,
  reference: string,
  description: string
): Promise<string> {
  const data = `
  <?xml version="1.0" encoding="utf-8"?>
<API3G>
    <CompanyToken>${companyToken}</CompanyToken>
    <Request>createToken</Request>
    <Transaction>
        <PaymentAmount>${amount}</PaymentAmount>
        <PaymentCurrency>${currency}</PaymentCurrency>
        <CompanyRef>${companyRef}</CompanyRef>
        <RedirectURL>${redirectUrl}</RedirectURL>
        <CompanyRefUnique>${reference}</CompanyRefUnique>
        <PTL>5</PTL>
    </Transaction>
    <Services>
        <Service>
            <ServiceDescription>${description}</ServiceDescription>
            <ServiceDate>${new Date().toUTCString()}</ServiceDate>
        </Service>
    </Services>
</API3G>
  `
  const paymentRequest = await dpoApi.connect(httpMethod.POST, data)
  const parsedResponse = JSON.stringify(paymentRequest)
  return parsedResponse
}
