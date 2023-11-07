import { ContentfulClientApi, createClient } from 'contentful';
import type { BlogPostSkeleton } from '../types';

export class Contentful {
  private client: ContentfulClientApi<undefined> | null = null;

  constructor() {
    this.client = createClient({
      space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID || process.env.PUBLIC_CONTENTFUL_SPACE_ID!,
      accessToken: import.meta.env.PUBLIC_CONTENTFUL_DELIVERY_TOKEN || process.env.PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
    });
  }

  public async entryTypes() {
    try {
      const result = await this.client?.getContentTypes();
      return result
    } catch (e) {
      console.log('[-] CONTENTFUL ERROR');
      console.log(e);
    }
  }

  public async entryType(entryTypeID: string) {
    try {
      const result = await this.client?.getContentType(entryTypeID);
      return result
    } catch (e) {
      console.log('[-] CONTENTFUL ERROR');
      console.log(e);
    }
  }

  public async getEntries(type?: string) {
    try {
      const result = await this.client?.getEntries<BlogPostSkeleton>({ query: type });
      return result;
    } catch (e) {
      console.log('[-] CONTENTFUL ERROR');
      console.log(e);
    }
  }

  public async getEntry(type: string, id: string) {
    try {
      const result = await this.client?.getEntries<BlogPostSkeleton>();
      return result;
    } catch (e) {
      console.log('[-] CONTENTFUL ERROR');
      console.log(e);
    }
  }
}
