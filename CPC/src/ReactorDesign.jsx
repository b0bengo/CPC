import { useState } from 'react';

function ReactorDesign() {
  const [reactorType, setReactorType] = useState('CSTR');
  const [flowRate, setFlowRate] = useState('');
  const [initialConcentration, setInitialConcentration] = useState('');
  const [rateConstant, setRateConstant] = useState('');
  const [conversion, setConversion] = useState('');
  const [volume, setVolume] = useState(null);

  const calculateVolume = () => {
    const F_A0 = parseFloat(flowRate);
    const C_A0 = parseFloat(initialConcentration);
    const k = parseFloat(rateConstant);
    const X = parseFloat(conversion);

    if (isNaN(F_A0) || isNaN(C_A0) || isNaN(k) || isNaN(X) || X <= 0 || X >= 1) {
      setVolume('Please enter valid inputs. Conversion (X) must be between 0 and 1.');
      return;
    }

    let calculatedVolume;

    if (reactorType === 'CSTR') {
      const r_A = k * C_A0 * (1 - X);
      calculatedVolume = F_A0 * X / r_A;
    } else if (reactorType === 'PFR') {
      calculatedVolume = (F_A0 / (k * C_A0)) * Math.log(1 / (1 - X));
    }

    setVolume(calculatedVolume.toFixed(2));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Reactor Design Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateVolume();
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <div>
          <label>
            Reactor Type:
            <select
              value={reactorType}
              onChange={(e) => setReactorType(e.target.value)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              <option value="CSTR">CSTR</option>
              <option value="PFR">PFR</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Molar Flow Rate (F<sub>A0</sub>) (mol/s):
            <input
              type="number"
              value={flowRate}
              onChange={(e) => setFlowRate(e.target.value)}
              placeholder="Enter F_A0"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Initial Concentration (C<sub>A0</sub>) (mol/L):
            <input
              type="number"
              value={initialConcentration}
              onChange={(e) => setInitialConcentration(e.target.value)}
              placeholder="Enter C_A0"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Rate Constant (k) (1/s):
            <input
              type="number"
              value={rateConstant}
              onChange={(e) => setRateConstant(e.target.value)}
              placeholder="Enter k"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Conversion (X) (fraction):
            <input
              type="number"
              value={conversion}
              onChange={(e) => setConversion(e.target.value)}
              placeholder="Enter X (0-1)"
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
          Calculate Volume
        </button>
      </form>
      {volume !== null && (
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {typeof volume === 'string' ? volume : `Reactor Volume: ${volume} L`}
        </p>
      )}
    </div>
  );
}

export default ReactorDesign;