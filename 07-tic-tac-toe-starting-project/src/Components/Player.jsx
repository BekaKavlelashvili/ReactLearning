import { useState } from "react";

export default function ({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditMode, setEditMode] = useState(false);

  function handleEdit() {
    setEditMode((isEditMode) => !isEditMode);

    if (isEditMode) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditMode && <span className="player-name">{playerName}</span>}
        {isEditMode && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditMode ? "Save" : "Edit"}</button>
    </li>
  );
}
