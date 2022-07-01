import React from "react"

import { FiCheck, FiX } from "react-icons/fi"

import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

const data = [
  {
    id: "beacon",
    name: "Beacon",
    highlighted: true,
  },
  {
    id: "validator",
    name: "Validator",
    highlighted: false,
  },
  {
    id: "execution",
    name: "Execution",
    highlighted: false,
  },
]

const features = [
  {
    name: "Asynchronous",
    values: { beacon: true, validator: false, execution: false },
  },
  {
    name: "Plugin support",
    values: { beacon: true, validator: true, execution: true },
  },
  {
    name: "Metrics",
    values: { beacon: true, validator: true, execution: true },
  },
  {
    name: "Monitoring",
    values: { beacon: false, validator: true, execution: true },
  },
  {
    name: "Key Management",
    values: { beacon: false, validator: true, execution: true },
  },
]

const renderTable = () => {
  const size = 24
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {data.map((props, idx) => (
            <th key={idx}>{props.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((props, idx) => (
          <tr key={idx}>
            <td className={styles.label}>{props.name}</td>
            {props.values &&
              data.length &&
              data.map((item, idx) => (
                <td
                  key={idx}
                  className={item.highlighted ? styles.resultH : styles.result}
                >
                  {props.values[item.id] === true ? (
                    <FiCheck size={size} />
                  ) : (
                    <FiX size={size} className={styles.resultX} />
                  )}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Comparison = () => {
  return (
    <section id="comparison" className={styles.comparison}>
      <div className="container">
        <div className="row">
          <div className="col col--4 col--offset-1">
            <Headline
              category="Comparison"
              title="How do  Eth2 clients compare to each other?"
              subtitle="This is not an exhaustive list of clients!"
            />
          </div>
          <div className="col col--6 col--offset-1">{renderTable()}</div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
