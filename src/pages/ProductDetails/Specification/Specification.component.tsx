import React from "react";

const Specification = (props: any) => {
  const { specifications } = props;
  return (
    <div className="my-3 bg-white px-3 pt-5 ">
      <table className="w-full text-lg font-base text-left text-gray-500">
        <tbody className="">
          <tr className="px-1 py-4 border-b bg-gray-50">
            <th className="py-3 px-1">Brand</th>
            <td className="nfo"> {specifications.Brand}</td>
          </tr>
          <tr>
            <th className="py-3 px-1">Model</th>
            <td className="nfo"> {specifications.Model}</td>
          </tr>
          <tr className="px-1 py-4 border-b bg-gray-50">
            <th className="py-3 px-1">Color</th>
            <td className="nfo"> {specifications.Color[0]}</td>
          </tr>
          <tr>
            <th className="py-3 px-1">Weight</th>
            <td className="nfo"> {specifications.Weight}</td>
          </tr>
          <tr className="px-1 py-4 border-b bg-gray-50">
            <th className="py-3 px-1">Impedance</th>
            <td className="nfo"> 32 ohm</td>
          </tr>
          <tr>
            <th className="py-3 px-1">Length</th>
            <td className="nfo"> {specifications.Length}</td>
          </tr>
          <tr className="px-1 py-4 border-b bg-gray-50">
            <th className="py-3 px-1">Input Voltage (V)</th>
            <td className="nfo"> 20 mW</td>
          </tr>
          <tr>
            <th className="py-3 px-1">Frequency (Hz - KHz)</th>
            <td className="nfo"> 20 Hz – 20 kHz, Mic: 100 Hz – 10 kHz</td>
          </tr>
          <tr className="px-1 py-4 border-b bg-gray-50">
            <th className="py-3 px-1">Microphone</th>
            <td className="nfo"> Type: Detachable boom</td>
          </tr>
          <tr>
            <th className="py-3 px-1">Sensitivity</th>
            <td className="nfo">
              {" "}
              96 dB SPL @1 kHz / 1mW, Mic: -42 dBV @ 1 kHz / Pa
            </td>
          </tr>
          <tr className="px-1 py-4 border-b bg-gray-50">
            <th className="py-3 px-1">Style</th>
            <td className="nfo">{specifications.Style}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specification;
