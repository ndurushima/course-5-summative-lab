import { useId, useState } from "react";

export default function useFormField(initial = "") {
  const id = useId();
  const [value, setValue] = useState(initial);
  const onChange = (e) => setValue(e.target.value);
  return [value, { id, value, onChange }];
}
