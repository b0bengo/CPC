import { useState } from 'react';

function IdealGasLaw() {
  const [pressure, setPressure] = useState('');
  const [volume, setVolume] = useState('');
  const [moles, setMoles] = useState('');
  const [temperature, setTemperature] = useState('');
  const [result, setResult] = useState('');

  const R = 0.0821; // Ideal gas constant in L·atm/(mol·K)

  const calculate = () => {
    if (!pressure) {
      setResult(`P = ${(moles * R * temperature) / volume} atm`);
    } else if (!volume) {
      setResult(`V = ${(moles * R * temperature) / pressure} L`);
    } else if (!moles) {
      setResult(`n = ${(pressure * volume) / (R * temperature)} mol`);
    } else if (!temperature) {
      setResult(`T = ${(pressure * volume) / (moles * R)} K`);
    } else {
      setResult('Please leave one field empty to calculate it.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Ideal Gas Law Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
      >
        <div>
          <label>
            Pressure (P in atm):
            <input
              type="number"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
              placeholder="Leave empty to calculate"
            />
          </label>
        </div>
        <div>
          <label>
            Volume (V in L):
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Leave empty to calculate"
            />
          </label>
        </div>
        <div>
          <label>
            Moles (n in mol):
            <input
              type="number"
              value={moles}
              onChange={(e) => setMoles(e.target.value)}
              placeholder="Leave empty to calculate"
            />
          </label>
        </div>
        <div>
          <label>
            Temperature (T in K):
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Leave empty to calculate"
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default IdealGasLaw;