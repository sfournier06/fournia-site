---
title: "How do you comply with Law 25 when using AI in a Quebec business?"
seoTitle: "Law 25 and AI: how to comply in Quebec"
description: "Law 25 does not block AI. Here are 4 concrete steps to take before connecting an AI tool to your customers' data in Quebec."
fr: "loi-25-ia-entreprise-quebec-conformite-2026"
pubDate: 2026-07-09
updatedDate: 2026-07-09
author: "Simon Fournier"
publisher: "FournIA"
heroAlt: "A Quebec small business office with an AI tool and a compliance document, symbolizing the protection of personal information under Law 25."
tags: ["Law 25", "AI small business Quebec", "compliance", "data protection"]
faq:
  - q: "Does Law 25 apply to small businesses, even very small ones?"
    a: "Yes. Law 25 applies to any business that operates in Quebec and holds personal information, with no minimum threshold for size or revenue. A one-person business is covered just like a large company."
  - q: "When ChatGPT or Claude process my customers' data, is that a transfer outside Quebec?"
    a: "Generally yes. Sending personal information to an AI tool operated by a foreign company (OpenAI, Anthropic) is a communication outside Quebec within the meaning of section 17 of Law 25, even if Canadian servers are used, because the American CLOUD Act can give access to the data. An assessment is required before doing it."
  - q: "What is a PIA, and do you need one before implementing an AI tool?"
    a: "A PIA (privacy impact assessment, called EFVP in Quebec) is a formal analysis of the risks a project poses to privacy. It is mandatory for any project to acquire, develop or overhaul a system that presents high risks, which covers most AI deployments that touch customer data, but not all of them."
  - q: "How do you anonymize or de-identify data before sending it to an AI tool?"
    a: "Anonymizing means making the data irreversibly impossible to link to a person. De-identifying means removing direct identifiers (name, email, phone) before sending the rest to the AI tool. De-identifying reduces the risk without eliminating it, because re-identification is sometimes still possible."
  - q: "Who must be designated as the person in charge of the protection of personal information?"
    a: "By default, it is the person with the highest authority in the business (often the owner or CEO). This responsibility can be delegated in writing to an employee or a third party, and the title and contact information of the person in charge must be public."
  - q: "What penalties do you risk if you use AI without complying with Law 25?"
    a: "Law 25 provides for two separate tiers: administrative monetary penalties of up to $10 million or 2% of worldwide turnover, and penal fines of up to $25 million or 4% of worldwide turnover. These amounts are ceilings, not automatic fines."
---

To comply with Quebec's privacy law (Law 25) when using AI in your Quebec business, there are four concrete steps to take before connecting an AI tool to your customers' data: designate a person in charge of the protection of personal information, carry out a privacy impact assessment (PIA, called EFVP in Quebec) when the project presents high risks, govern the transfer of data outside Quebec (section 17), and de-identify the data when possible. Law 25 does not block AI: it requires you to choose and configure it differently.

This point deserves to be clear from the start. A tool like ChatGPT or Claude does not automatically "violate" Law 25. It all depends on what you send it, with what consent, and how the data transfer is governed. It is your use that is compliant or not, not the tool itself.

## Why is AI compliance in the spotlight in Quebec in 2026?

In May 2026, the Commission d'accès à l'information (CAI) published the [findings of its joint investigation into OpenAI](https://www.cai.gouv.qc.ca/actualites/resultats-enquete-conjointe-sur-openai-chatgpt) (in French) (the company behind ChatGPT). The investigation concluded that OpenAI had not complied with the law on several points, including excessive collection of information and insufficient consent.

Quebec media covered the story widely. [Radio-Canada reported](https://ici.radio-canada.ca/nouvelle/2251896/chatgpt-openai-vie-privee-donnees-renseignements) (in French) that OpenAI had breached Canadian and Quebec privacy laws. The result: AI compliance has become a real question for small business decision makers, not just a topic for lawyers.

This case confirms one thing. Technical confidence (the AI works, it saves time) is no longer enough to decide. The last obstacle before implementing is often legal confidence.

## Does Law 25 really apply to a small business?

Yes. Law 25 applies to any business that operates in Quebec and holds personal information, [with no minimum threshold](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/champ-application-loi_entreprises) (in French) for size, revenue or employees. A self-employed worker, a three-person business and a large company are covered by the same basic principles.

Personal information is any information that makes it possible to identify a natural person: name, email, phone number, address, purchase history linked to a customer. As soon as your customer data contains this kind of information, Law 25 governs what you do with it, including when you hand it to an AI tool for processing.

In other words, "we're too small to be affected" is not a valid argument in Quebec. Size does not change whether the law applies, it only changes the scale of the measures to put in place.

## Step 1: designate a person in charge of the protection of personal information

Law 25 requires every business to designate a person in charge of the protection of personal information. [By default, it is the person with the highest authority](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25) (in French) in the business, so often the owner or CEO in a small business.

This responsibility can be delegated in writing to an employee or a third party. The title and contact information of this person must be made public, usually on the business's website.

For an AI project, this person is the one who decides: do we send this data to this tool, and with what safeguards? It is the first step because if this person does not exist, there is nobody to make the compliance decision.

## Step 2: do a PIA when the project presents high risks

A PIA (privacy impact assessment, called EFVP in Quebec) is a formal analysis of the risks a project poses to the privacy of the people concerned. Law 25 makes it mandatory for any project to acquire, develop or overhaul an information system that presents high risks.

Most AI deployments that touch customer data fall into this category, but not all of them. Automating replies to emails that contain customer information presents risks; generating marketing copy without any personal data, much less so.

The CAI publishes an [official guide on the PIA](https://www.cai.gouv.qc.ca/uploads/pdfs/CAI_GU_EFVP.pdf) (in French) that details the process. In practice, a PIA forces you to answer three questions before building: what personal data flows through, what the risks are, and what measures reduce them.

## Step 3: govern the transfer of data outside Quebec (section 17)

Section 17 of Law 25 governs the communication of personal information outside Quebec. Before such a transfer, the business must assess whether the data will receive adequate protection, in particular with regard to the laws of the destination territory.

Sending customer information to ChatGPT or Claude is generally a transfer outside Quebec, because these tools are operated by foreign companies (OpenAI, Anthropic). A common trap: believing that Canadian servers settle the question. They do not settle it automatically, because the American CLOUD Act can allow American authorities to access data held by these companies, even when it is stored in Canada.

What this means in practice: do not assume an AI tool is compliant because it advertises Canadian servers. The section 17 assessment must be done for each tool, before connecting personal data to it.

## Step 4: de-identify or anonymize the data before sending it

The simplest way to reduce the risk is often not to send personal information at all. De-identifying means removing direct identifiers (name, email, phone number, address) before sending the rest of the content to the AI tool.

Anonymizing goes further: making the data irreversibly impossible to link to a person, according to recognized criteria. The distinction matters, because de-identified data can sometimes be re-identified by cross-referencing it with other sources, while truly anonymized data is no longer personal information within the meaning of the law.

For many automations, de-identifying is enough to change the risk calculation. An AI agent that writes a follow-up can work from a template without the customer's real name, with the name inserted back locally afterward, outside the AI tool.

## How does FournIA handle Law 25 compliance in an AI project?

At FournIA, every implementation of an AI agent or automation starts with a Law 25 checkpoint, before building anything. The principle is simple: no compliance artifact, no build.

This checkpoint covers the four steps above, applied to the business's specific case: who is the person in charge, what data flows through, is there a transfer outside Quebec, can the data be de-identified. Based on Montreal's North Shore, FournIA supports Quebec small businesses, and local compliance is part of the work, not a box checked at the end.

The goal is not to slow down AI adoption. It is to make it defensible, so the small business owner can sleep soundly after connecting a tool to their customer data.

## What penalties do you actually risk?

Law 25 provides for two separate tiers of penalties, and they should not be confused. The [administrative monetary penalty tier](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25) (in French) can reach $10 million or 2% of worldwide turnover for the previous fiscal year, whichever is higher. The [penal fine tier](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/information-entreprises-privees/sanctions-entreprises-poursuites) (in French) can reach $25 million or 4% of that same turnover.

These amounts are ceilings set by the law, not fines applied automatically at the first mistake. The real issue for a small business is often less the maximum fine than the loss of customer trust and the cost of repairing an incident.

## Where do you start without drowning?

The first useful reflex is not to stop everything, but to map things out. List the AI tools already used in the business, and the data you send them. This list often reveals transfers of personal information that nobody consciously decided on.

Next, designate the person in charge, then apply the four steps project by project. Law 25 compliance is built tool by tool, not as one big undertaking.

This article gives concrete guideposts, but it is not legal advice. For complex cases (sensitive data, large volumes, regulated sectors), consulting a lawyer or a personal information protection expert remains the right decision.

If you want to connect an AI tool to your customer data without guessing, FournIA does an audit that includes the Law 25 component before any implementation. A conversation is better than a lingering doubt.
