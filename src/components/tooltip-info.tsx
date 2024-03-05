import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'

export function TooltipInfo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            src="/info.svg"
            alt="Information"
            className="ml-2"
            width={20}
            height={20}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>
            This model has a different rate for prompt and completion.
            <br /> This price is computed with prompt tokens = completion
            tokens.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
