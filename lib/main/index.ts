import axios from 'axios'
import { httpMethod } from 'types'

export class Api {
  public async connect (
    method: httpMethod,
    data: any
  ): Promise<any> {
    const url = 'https://secure.3gdirectpay.com/API/V6'
    const headers = {
      'Content-Type': 'application/xml'
    }
    try {
      const request = await axios({
        url,
        method,
        headers,
        data
      })
      if (request.status.toString().startsWith('4') || request.status.toString().startsWith('5')) {
        console.error(`Error returned by the API: ${request.statusText}`)
        throw new Error(request.statusText)
      }
      return request.data
    } catch (error) {
      console.log(`There was an error connecting to the API: ${error.message}`)
      throw new Error(error.message)
    }
  }
}

export const dpoApi = new Api()
