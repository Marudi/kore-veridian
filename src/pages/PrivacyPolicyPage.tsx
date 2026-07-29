import { LegalDocumentPage } from '../components/legal/LegalDocumentPage'
import { privacyPolicy } from '../data/legalDocuments'

export function PrivacyPolicyPage() {
  return <LegalDocumentPage document={privacyPolicy} />
}
