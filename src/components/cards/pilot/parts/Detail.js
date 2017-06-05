import React from 'react'

const StatBox = ({stat, value}) => (
  <div className={`${stat} box`}>
    <div className="icon">
      <i className={`xwing-miniatures-font xwing-miniatures-font-${stat}`}></i>
    </div>
    <div className="value">{value}</div>
  </div>
)

const Detail = ({text, actions, stats}) => (
  <div className="detail">
    <div className="stats">
      <StatBox stat="attack" value={stats.attack} />
      <StatBox stat="agility" value={stats.agility} />
      <StatBox stat="hull" value={stats.hull} />
      <StatBox stat="shield" value={stats.shield} />
    </div>

    <div className="text-actions">
      <div className="text">
        <p>{text}</p>
      </div>

      <div className="actions">
        {actions.map((action, i) => (
          <div className="action" key={i}>
            <i className={`xwing-miniatures-font xwing-miniatures-font-${action}`}></i>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Detail
