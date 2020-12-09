import React from "react";

import TextBlock from "../../components/common/TextBlock";
import Button from "../../components/common/Button";
import Farm from "../../components/farm";

import { FDI_VAULT } from "../../helpers/fdiVault/constants";

import "./styles.scss";

export default function FAQ() {
  return (
    <>
      <div className="root faq-container">
        <div className="content">
          <div className="section">
            <h1>General</h1>
            <details className="block">
              <summary>1. What is the Purpose of the $PYLON token?</summary>
              <p>
                $PYLON is a Utility token that gives access to VAULTS which
                distributes the profits from a crowdsourced GPU mine. PYLON is a
                way for users to gain access to GPU mining revenue in a KYC Free
                way with none of the obligations for maintenance
                hardware/construction cost, programming or tax implications.
              </p>
            </details>
            <details className="block">
              <summary>2. When did Pylon.Finance Launch?</summary>
              <p>
                The GPU mining business has been around for the last Six years.
                Our venture into cryptocurrency with $PYLON was established in
                September 2020. The Token has a fixed supply of 8400 and was
                distributed in a fair launch, meaning, no presale, no pre-mine
                and no team allocation.
              </p>
            </details>
            <details className="block">
              <summary>3. What are the Tokenomics of $PYLON?</summary>
              <p>
                The $PYLON token is designed to benefit from a stream of income
                that does not solely rely on the need for new investors. Weekly
                buybacks from GPU mining promote constant buy pressure on the
                token, and staking further removes circulating supply from the
                market and places it in holders hands.
              </p>
              <p>
                <strong>Total Circulating Supply:{` `} </strong> 8400 Fixed.
                Closer to 7700 from users locking or losing PYLON.
              </p>
              <p>
                <strong>Token Burn:{` `} </strong>12,600 are permanently locked
                or burned
              </p>
              <p>
                <strong>Buybacks:{` `} </strong> Based on Profits from GPU
                Mining Seed. An initial seed of $1,000,000 has already been
                crowdsourced for the PYLON GPU Vault. Example at 33% APY this
                would translate into $324,000 worth of buybacks for a mine this
                size. APY is Dynamic based on market conditions
              </p>
              <p>
                <strong>Dividends:{` `} </strong>100% Of Buybacks are placed in
                the Vaults and distributed based on the staked amount.
              </p>
            </details>
            <details className="block">
              <summary>4. What is GPU Mining?</summary>
              <p>
                When you send transactions on the Ethereum network it will cost
                gas fees. GPU Miners validate these transactions on the
                blockchain and Receive the Fees in ETH. GPU Miners also have the
                flexibility to mine other profitable coins.
              </p>
            </details>
            <details className="block">
              <summary>
                5. What Proof do you have of the business and the mine?
              </summary>
              <p>
                <a
                  href="https://drive.google.com/drive/folders/1Lq_GOCGk-h8NdRD5CvZ8a9eGNsc-awDR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video and Picture Evidence
                </a>
              </p>
              <p>
                You can see The existing business and when $PYLON units began
                construction here. Some images and videos with specific requests
                to write a phrase or say our name in specific scenarios. More
                will be provided as it’s available.
              </p>
            </details>
            <details className="block">
              <summary>6. What makes $PYLON unique?</summary>
              <p>
                What makes $PYLON unique is a specific factor no other project
                can replicate. They can fork our code; however, others will
                never be able to copy our Real world infrastructure,
                connections, proprietary technology and efficiency the
                Underlying U.S based business commands.
              </p>
              <p>
                The Potential in Pylon is Scalability. At $1Million dollars, the
                Mine projects to generate approximately $324,000 USD per year
                for approximately Ten years in a bear market. In a bullish
                market this number projects at around 100%-250% of this. As
                users continue to join, Pylon.finance is designed to scale the
                size of the existing mineto keep ROI consistent.
              </p>
            </details>
          </div>
          <div className="section">
            <h1>Buyback and Reward System</h1>
            <details className="block">
              <summary>7. How does the buyback system work?</summary>
              <p>
                The GPU Mining profits are earned as Ethereum from Validating
                transactions and earning Gas Fees in return.
              </p>
              <p>
                Every Week, The profits earned will be used to Buy Back Pylon on
                the open market. 100% of the $PYLON brought back is then
                injected into the VAULTS and Users will receive dividends
                depending on their stake over the course of 7 Days.
              </p>
            </details>
            <details className="block">
              <summary>8. When do Rewards pay out?</summary>
              <p>
                On Saturdays 1:35PM EST, The Buybacks from the weekly profits
                are injected into the Vaults. Rewards constantly accrue over the
                course of the next 7 days based on how much a user has staked.
                Rewards end on Saturdays at 1:35PM EST at which point new
                rewards are added and the cycle starts again.
              </p>
            </details>
            <details className="block">
              <summary>9. My rewards are not accruing, why?</summary>
              <p>
                <a
                  href="https://t.me/pylonfinance/131163"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Explanation here
                </a>
              </p>
              <p>
                You must stake the week before new rewards are added, this may
                be done any time before Saturday’s at 1:35PM EST to receive the
                next week's rewards. For the next week you must leave your
                Amount Staked and not Add anymore or remove and deposit again
                until just prior to the next week's reward cycle. This was added
                so ROI could remain consistent week to week and users could not
                abuse the Vault reward system
              </p>
            </details>
          </div>
          <div className="section">
            <h1>VAULTS</h1>
            <details className="block">
              <summary>10. Does the FDI Vault and PYLON share rewards?</summary>
              <p>
                No. Each vault has separate rewards based on their Mining Seed.
                Both Vaults do benefit from each other by increasing the buy
                pressure on PYLON therefore increasing the Tokens price.
              </p>
            </details>
            <details className="block">
              <summary>
                11. How is the FDI Vault different from the PYLON GPU Vault?
              </summary>
              <p>
                <strong>The FDI Vault </strong>is a direct 1 to 1 investment. If
                users deposit $100,000 worth of a cryptocurrency, they begin
                receiving profits from $100,000 worth of mining equipment for
                the lifespan of the equipment which is approximately 10 years.
                There is a 0.5% fee on deposit that goes to Expanding Pylons GPU
                Vault. Funds cannot be withdrawn. The benefits of the FDI vault
                is that users do not need to worry about a pool share affecting
                their ROI as your investment is tailored to your deposit.
              </p>
              <p>
                <strong>The Pylon GPU Vault</strong> rewards users based on the
                % of $PYLON they own and how much is staked. PYLONS rewards are
                based On the crowd sourced amount generated from users.
                Currently the first builds seed is already funded at $1 million
                USD. No Fee, Funds can be withdrawn at any time.
              </p>
            </details>
            <details className="block">
              <summary>
                12. How is the Projected Mining seed APY calculated?
              </summary>
              <p>
                Based on the history of the existing business, the return on
                investment the mines project to earn ranges from 20%-250%
                depending on Market conditions. We update the APY mining seed
                projections as they change. As the Market turns bullish, the
                numbers shift to the higher ranges and in a bear market they
                shift lower. Even in bear markets this is the most consistent
                and profitable APY on any market.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
