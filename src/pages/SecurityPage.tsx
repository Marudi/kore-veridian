import { LegalDocumentPage } from '../components/legal/LegalDocumentPage'
import { securityOverview } from '../data/legalDocuments'

export function SecurityPage() {
  return <LegalDocumentPage document={securityOverview} />
}
