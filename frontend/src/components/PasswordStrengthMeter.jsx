import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "No mínimo 6 caracteres", met: password.length >= 6 },
    { label: "Contém uma letra maiúscula", met: /[A-Z]/.test(password) },
    { label: "Contém uma letra minúscula", met: /[a-z]/.test(password) },
    { label: "Contém um número", met: /\d/.test(password) },
    { label: "Contém um caracter especial", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-4 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-sm">
          {item.met ? (
            <Check className="size-4 text-indigo-500 mr-2" />
          ) : (
            <X className="size-4 text-slate-400 mr-2" />
          )}
          <span className={item.met ? "text-indigo-500" : "text-slate-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const getColor = (strength) => {
    if (strength === 0) return "bg-rose-500";
    if (strength === 1) return "bg-amber-500";
    if (strength === 2) return "bg-amber-400";
    if (strength === 3) return "bg-indigo-500";
    return "bg-indigo-600";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Muito fraca";
    if (strength === 1) return "Fraca";
    if (strength === 2) return "Razoável";
    if (strength === 3) return "Boa";
    return "Forte";
  };

  const strength = getStrength(password);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-slate-600">Segurança</span>
        <span className={`text-sm font-medium ${strength > 2 ? "text-indigo-600" : strength > 0 ? "text-amber-600" : "text-rose-600"}`}>
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1/4 rounded-full transition-colors duration-300 
            ${index < strength ? getColor(strength) : "bg-slate-200"}`}
          />
        ))}
      </div>

      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;