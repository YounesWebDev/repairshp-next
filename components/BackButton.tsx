"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type Props = {
    title: string,
    className?: string,
    variant?: "default" | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined,
} & ButtonHTMLAttributes<HTMLButtonElement>
export function BackButton({ title, className, variant , ...props }: Props) {
    const router = useRouter();

    return (
        <Button
            variant={variant}
            className={className}
            {...props}
            onClick={() => router.back()}
            title={title}
        >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {title}
        </Button>
    )
}
