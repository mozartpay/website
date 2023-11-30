'use client'
import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    createIcon,
} from '@chakra-ui/react'

export default function Hero() {
    return (
        <>
        
            <Container maxW={'3xl'}>
            <Heading
                       >
                        Orchestrated Agreements (AOs)

                    </Heading>
            <Text color={'gray.500'}>
        <b>Introduction:</b><br />
        In an era where digital transactions are the backbone of global commerce, 
        Orchestraded Agreements (OAs) emerge as a pioneering solution. Developed by OG Technologies EU, 
        OAs represent the next leap in blockchain and smart contract technology - an innovation designed 
        to transform how we execute and manage financial agreements.
      </Text>

      <Text color={'gray.500'}>
        <b>What are Orchestraded Agreements?</b><br />
        Orchestraded Agreements are a suite of advanced, blockchain-powered tools designed to automate 
        and streamline the execution of contracts in the digital world. Inspired by the orchestration 
        capabilities of Kubernetes in managing containers, OAs bring similar efficiency and flexibility 
        to managing 'contracts' - particularly in complex, cross-border financial transactions.
      </Text>

      <Text color={'gray.500'}>
        <b>Core Features:</b><br />
        <ul>
          <li>Smart Contract Orchestration: Leveraging the power of Rust programming, OAs offer an 
          unprecedented level of precision and security in automating contractual obligations.</li>
          <li>Cross-Border Efficiency: Tailored to address the nuances of international payments, 
          OAs simplify transactions across different jurisdictions and currencies.</li>
          <li>Immutability and Transparency: Built on blockchain technology, OAs provide a transparent, 
          tamper-proof system, ensuring trust and accountability in every transaction.</li>
          <li>User-Friendly Interface: With a frontend crafted in TypeScript/React, OAs are accessible 
          and manageable, offering a seamless user experience.</li>
        </ul>
      </Text>

      <Text color={'gray.500'}>
        <b>Benefits for Businesses:</b><br />
        <ul>
          <li>Reduced Transaction Costs and Times: Streamline your financial operations with automated 
          processes, significantly cutting down costs and transaction times.</li>
          <li>Enhanced Security and Compliance: Stay assured of security and adherence to international 
          regulatory standards, thanks to the inherent features of blockchain and smart contracts.</li>
          <li>Scalability and Flexibility: Whether you're a startup or an established enterprise, OAs 
          are designed to scale and adapt to your evolving business needs.</li>
        </ul>
      </Text>

      <Text color={'gray.500'}>
        <b>Applications:</b><br />
        From facilitating international trade payments to managing subscriptions in global markets, 
        OAs are versatile. They are particularly beneficial for:
        <ul>
          <li>Financial Institutions</li>
          <li>E-Commerce Platforms</li>
          <li>B2B Enterprises</li>
          <li>Global Service Providers</li>
        </ul>
      </Text>

      <Text color={'gray.500'}>
        <b>Join the Revolution:</b><br />
        Embrace the future of financial transactions with Orchestraded Agreements. At OG Technologies EU, 
        we're not just building a product; we're shaping the future of commerce. Contact us to discover 
        how OAs can redefine the way you handle digital transactions.
      </Text>
            </Container>
        </>
    )
}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
})
