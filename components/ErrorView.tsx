import { useTranslation } from "@/app/i18n";
import { useEffect, useState } from "react";

export default function ErrorView({ error }: { error: any }) {
    const [msg, setMsg] = useState<string>("");
    const { t } = useTranslation();

    useEffect(() => {
        if (!error) {
            return
        }
        if (typeof error === "object") {
            return setMsg((error as Object).toString());
        }
        setMsg(error);
    }, [error]);

    if (!msg) {
        return null
    }
    return (
        <div className="my-28 text-center">
            <p className="text-2xl font-bold">{t("an-error-has-occurred")}</p>
            <p className="text-sm">{msg}</p>
        </div>
    );
}
