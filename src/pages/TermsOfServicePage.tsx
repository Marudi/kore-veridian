import { LegalDocumentPage } from '../components/legal/LegalDocumentPage'
import { termsOfService } from '../data/legalDocuments'

export function TermsOfServicePage() {
  return <LegalDocumentPage document={termsOfService} />
}
