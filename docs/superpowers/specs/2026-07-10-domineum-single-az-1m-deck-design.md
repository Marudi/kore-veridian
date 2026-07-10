# Domineum Single AZ $1M Deployment Deck Design

## Purpose

Create a short, client-facing PowerPoint that updates the approved Single Availability Zone launch plan to a hard USD 1,000,000 cap. The deck must preserve Kore Veridian's documented USD 375,000 development fee, include twelve months of colocation and connectivity, include Year-1 Gold support, and explain how scope reductions affect launch functionality.

The source deck is:

`documents/domineum/03-Roadmap-and-Commercials/Breakdown Per AZ Number/Re_ Split Presentation - updated/Single AZ Kore-Veridian-Domineum 10th July 2026.pptx`

## Communication Job

By the end of the deck, Domineum decision-makers should understand that a controlled Single AZ cloud for ten launch customers can be delivered within a USD 1M funding cap, provided the launch catalogue is tightly scoped, procurement is approved early, and deferred capabilities are funded during expansion.

## Approved Commercial Baseline

| Cost area | Budget USD |
|---|---:|
| Kore Veridian development fee | 375,000 |
| Core hardware and rack infrastructure | 360,000 |
| Third-party software and security | 55,000 |
| Year-1 Gold support | 45,000 |
| Twelve-month colocation and connectivity | 144,000 |
| Logistics and controlled contingency | 21,000 |
| **Total** | **1,000,000** |

The existing 10% revenue share remains a post-launch commercial term and is not an upfront cost within the USD 1M cap.

The USD 360,000 hardware and USD 55,000 third-party allocations are target envelopes, not vendor quotations. Final release of procurement funds requires an approved Bill of Quantities, compliant vendor quotations, and confirmation that the ten-customer launch capacity remains viable.

## Payment Gates

Kore Veridian's USD 375,000 development fee retains a 40/40/20 structure:

| Gate | Timing | Composition | Payment USD |
|---|---:|---|---:|
| Contract and mobilisation | Week 0 | 40% development fee | 150,000 |
| Architecture, BoQ and procurement approval | Week 2 | Hardware 360,000 plus logistics reserve 21,000 | 381,000 |
| Licence and facility activation | Week 4 | Third-party services 55,000 plus first six months of colocation/connectivity 72,000 | 127,000 |
| Platform foundation acceptance | Week 10 | 40% development fee | 150,000 |
| Production acceptance and support activation | Week 16 | 20% development fee 75,000, Gold support 45,000, and remaining six months of colocation/connectivity 72,000 | 192,000 |
| **Total** |  |  | **1,000,000** |

Hardware, licence, facility, carrier, logistics, and similar third-party costs must be paid directly by Domineum or prefunded before Kore Veridian makes commitments. The logistics reserve is controlled and used only with written approval; any unused balance is credited or reallocated by agreement.

## Launch Service Scope

The initial service must remain useful and operable for ten controlled launch customers. It will provide:

- Self-service virtual compute and standard instance profiles.
- Persistent storage and baseline snapshots.
- Tenant networks, public IP, routing, firewall and NAT services.
- Customer portal, identity and role-based access.
- Usage metering, pricing inputs, invoice export and basic billing reconciliation.
- Baseline backup and restore for agreed workloads and retention periods.
- Central monitoring, alerting and operational logging.
- Security hardening, scoped penetration testing, runbooks, training and launch hypercare.
- Year-1 Gold support.

The target physical footprint remains four compute hosts, three storage nodes and three management nodes, subject to final vendor specifications and capacity validation.

## Cost Decisions and Functional Impact

| Cost decision | Launch treatment | Service impact | Phase 2 restoration trigger |
|---|---|---|---|
| Dedicated HSM deferred | Software-based key management with encryption, rotation, access control and audit logging | No dedicated certified hardware root of trust or customer-managed HSM service at launch | Regulated customer contract, certified key-custody requirement, or expansion approval |
| Appliance load balancer deferred | Virtual high-availability load balancing | Portal, API and tenant ingress remain available, with lower throughput headroom and no dedicated appliance failure domain | Sustained ingress growth, advanced traffic-management requirement, or 75-80% utilization |
| Advanced SIEM tier deferred | Central logging, dashboards and core alerting | No advanced behavioral analytics, extended compliance retention or automated evidence reporting | Compliance commitment, security operations maturity requirement, or expansion phase |
| Cross-site DR and extended backup deferred | Local backup, snapshots and tested restore procedures | No cross-site disaster recovery SLA or long-retention archive at launch | Contractual recovery requirement, second-site decision, or expansion phase |
| Full billing automation deferred | Metering, rated usage export and basic invoice reconciliation | Manual finance controls remain for exceptions; no complex marketplace, tax or settlement automation | Customer volume, billing workload or exception rate justifies automation |
| Advanced managed service catalogue deferred | Core IaaS, storage, networking, security, backup and monitoring | Managed database, broad container platform, advanced DR and specialized managed services are not launch offers | Validated demand and expansion funding |
| Premium hardware specifications reduced | Right-sized enterprise server configurations while retaining launch node counts | Lower workload density and less headroom for memory-heavy, storage-intensive or large enterprise tenants | Capacity reaches 75-80% or qualified demand exceeds available headroom |

The deck must distinguish between utilization triggers and contractual triggers. Security, regulatory, recovery or availability commitments can require an earlier Phase 2 investment even if infrastructure utilization is below 75%.

## Delivery Timeline

The plan uses a compressed sixteen-week sequence:

| Window | Milestone | Exit criteria |
|---|---|---|
| Weeks 1-2 | Mobilisation and architecture lock | Scope, launch catalogue, HLD/LLD, BoQ, decision owners and risk register approved |
| Weeks 2-5 | Procurement and facility activation | Vendor orders, rack, power, carrier, public IP and licence paths confirmed |
| Weeks 5-8 | Receiving, staging and physical foundation | Hardware accepted, racked, cabled and ready for platform deployment |
| Weeks 8-12 | Core platform and commercial integration | Compute, storage, networking, portal, metering, billing, backup and monitoring operational |
| Weeks 12-14 | Security, restore, UAT and operations readiness | Critical findings closed, restores proven, runbooks and training accepted |
| Weeks 15-16 | Controlled production launch | Ten launch customers approved for onboarding, support activated and production acceptance signed |

The schedule depends on procurement approval by Week 2, facility and carrier readiness, same-week technical decisions, and no uncontrolled expansion of the launch catalogue.

## Slide Narrative

The updated deck will contain six slides and preserve the source deck's typography, palette, logo, footer treatment and spacing conventions.

1. **Domineum can launch a controlled Single AZ cloud within a USD 1M cap.** Executive decision, approved envelope and essential conditions.
2. **The USD 1M budget protects Kore Veridian delivery and first-year operations.** Current-to-approved cost bridge and final allocation.
3. **Cost reductions narrow the catalogue without removing the core cloud service.** Launch capability, substitute control, limitation and deferred restoration.
4. **Sixteen weeks moves the programme from contract to controlled production.** Milestones, outputs, exit criteria and Domineum dependencies.
5. **Payments follow procurement exposure and accepted delivery gates.** Combined USD 1M cash-flow plan with the development fee visibly split 40/40/20.
6. **Ten customers launch now; Phase 2 restores resilience and advanced services.** Capacity guardrails, Single AZ limitations, deferred cost areas and 75-80% expansion triggers.

## Client-Facing Language Rules

- Use technology-neutral language such as Sovereign Cloud Platform, Unified Cloud Control Plane, compute, storage and tenant networking.
- Do not expose internal product names, implementation topology or internal runbook terminology.
- Do not position Single AZ as capable of strict 99.99% availability. State that it provides component-level high availability within one rack and facility domain.
- Present the selected model as a controlled and valuable launch posture, not as a failed version of the multi-AZ option.
- Treat all costs as planning estimates pending vendor and facility quotations.

## Quality and Acceptance

- Preserve the source deck as the visual template and export a distinct updated PPTX.
- Keep the deck concise, with one primary claim per slide.
- Verify all totals and payment gates sum to USD 1,000,000.
- Verify the Kore Veridian development fee totals USD 375,000 and is split USD 150,000 / USD 150,000 / USD 75,000.
- Render and inspect every final slide for clipping, overlap, text wrapping, logo fidelity and readable tables.
- Run presentation overflow and template-fidelity checks before delivery.
