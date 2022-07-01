import React, { ReactNode } from "react"

import clsx from "clsx"
import { FiCoffee, FiDatabase, FiPackage, FiZap } from "react-icons/fi"

import styles from "./styles.module.scss"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const size = 24
const data: Feature[] = [
  {
    icon: <FiPackage size={size} />,
    title: "Phase0",
    description:
      "The beacon node (BN) maintains the state of the beacon chain by communicating with other beacon nodes in the Ethereum network. Conceptually, it does not maintain keypairs that participate with the beacon chain .",
  },
  {
    icon: <FiZap size={size} />,
    title: "Validator client (VC) i",
    description:
      "These duties include the production of beacon blocks and signing of attestations..",
  },
  {
    icon: <FiDatabase size={size} />,
    title: "Beacon node (BN)",
    description:
      "Maintains the state of the beacon chain by communicating with other beacon nodes in the Ethereum network..",
  },
  {
    icon: <FiCoffee size={size} />,
    title: "Execution APIs",
    description:
      "This interface allows downstream tooling and infrastructure to treat different Ethereum clients as modules that can be swapped at will..",
  },
]

const Feature = ({ icon, title, description }: Feature) => {
  return (
    <div className={clsx("col col--6", styles.feature)}>
      <div className="item">
        <div className={styles.header}>
          <div className={styles.icon}>{icon}</div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--11 col--offset-1">
            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
