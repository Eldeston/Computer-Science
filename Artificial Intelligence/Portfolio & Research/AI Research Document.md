# Research Document
**Topic:** AI in Reverse Engineering

**Gap:** "Although current AI systems cannot fully replace human reverse engineers, recent advances in large language models (LLMs) and computing hardware have significantly improved AI-assisted reverse engineering capabilities. The long-term implications of these developments for cybersecurity, software protection, and vulnerability discovery remain insufficiently understood."

**Question:** "To what extent do AI-assisted reverse engineering technologies present opportunities and risks for cybersecurity and software development?"
## Sources
- Decompiling Closed Sourced Software
- https://aclanthology.org/anthology-files/anthology-files/pdf/findings/2025.findings-emnlp.395.pdf **"Learning Language Models and reverse engineering"** Note: Explains and dives deep on what reverse engineering does in LLM's and different elements about it. 
- https://arxiv.org/abs/2202.01142  **"Learning Language Models and reverse engineering"** Note: Investigates an LLM for reverse engineering tasks which focus on program purpose identification and information extraction from C code, which also includes stripped and decompiled versions. 
- https://aclanthology.org/2024.emnlp-main.203/  **"LLM Decompilation"** Note: Using LLM's to decompile binary code. 
- https://aclanthology.org/2025.findings-acl.1194/  **"LLM Decompilation"** Note: A framework that has effective evaluation on decompilers in reverse engineering workflows. This helps security experts choose on the selection of tools they need. 
- https://link.springer.com/article/10.1007/s11704-026-60308-3 **"Learning Language Models"** Note: Leans more on the History of LLM.
- https://www.mdpi.com/2076-3417/14/5/2074  **"Learning Language Models"** Note: Focuses in the Meaning of LLM. 
- https://arxiv.org/abs/2406.06391  **"Learning Language Models"** Note: Explains more on how LLM learns and it's cycle on gathering data.
- https://www.bbc.com/news/articles/cmly0lg3w5x2o  "**Hacking**" Note: News about the current worldwide cyber-security attack where most of it are happening to websites that are using PHP which most website in the internet are made of, It is also said that A.I was the one who found this problem. Searched for: **"wide world cyber attack current situation"**
- http://profs.scienze.univr.it/~giaco/download/Watermarking-Obfuscation/cifuentes95decompilation.pdf  **"Software Decompilation"** Note: Explains what a Decompiler is and it's different structure, it also shows the practical problems with Decompilation. Goes in-depth on Decompilation on Binary Programs. 
- https://arxiv.org/abs/2506.23644  **"LLM and Vulnerability Discovery"** Notes: Shows the result of using Multiple LLM's to do vulnerability discovery by using a novel framework called QLPro. Using two Claude-3.7-sonnet-thinking models it has detected 41 out of 62 confirmed vulnerabilities in it's JavaTest data set, which has achieved a detection rate of 66.10%. 
- https://arxiv.org/abs/2504.13474  **"LLM and Vulnerability Discovery"** Notes: To Prove more to out point on using LLM's in Vulnerability Detection this one also uses a framework called CORRECT (Context-Rich Reasoning Evaluation of Code with Trust) instead of using Claude-3.7 this group used a DeepSeek-R1. They showed the performance and limitation in detection in the current state of LLM's. 
# Projected Outline
**I. Introduction**
	**A. Learning Language Models**
	**B. Software Decompilation**
	**C. How are they both Use?** 
**II. Applications**
	**A. Accelerated Reverse Engineering**
	**B. Accelerated Vulnerability Discovery**
	**C. Software Preservation**
**III. Risks**
	**A. Attacker Accessibility**
	**B. Software Cracking**
	**C. Automated Attacks**
**IV. Conclusion**
**V. Reflection**
## Rough Draft
Decompilation is a complex reverse engineering technique widely used in cybersecurity, software maintenance, and digital preservation. By translating executable programs back into a human-readable form, analysts can study closed-source software, identify vulnerabilities, recover lost functionality, and maintain legacy systems. Traditionally, effective decompilation required significant technical expertise. However, the emergence of large language models (LLMs) has begun to lower the barrier to entry by assisting users with code analysis, binary interpretation, and vulnerability discovery. While these developments offer substantial benefits to defenders and researchers, they also raise concerns regarding software cracking, automated attacks, and the broader accessibility of offensive reverse engineering capabilities.

This paper argues that while AI has not yet achieved fully autonomous reverse engineering, its rapidly improving capabilities are transforming the field by accelerating decompilation and vulnerability discovery, creating both significant benefits and unprecedented cybersecurity risks.