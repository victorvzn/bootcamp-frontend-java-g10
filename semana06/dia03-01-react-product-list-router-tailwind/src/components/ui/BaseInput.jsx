export const BaseInput = ({
  type='text',
  label,
  name,
  onChange
}) => {
  return (
    <label className="flex flex-col gap-2 mb-4">
      <span className="font-normal">{label}</span>
      <input
        className="w-full py-4 px-5 rounded-lg bg-slate-400"
        type={type}
        name={name}
        onChange={onChange}
      />
    </label>
  )
}