import dayjs from "dayjs";

export async function CopyrightYear() {
  "use cache";
  return <>{dayjs().year()}</>;
}
