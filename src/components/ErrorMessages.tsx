import { ReactNode } from "react"
import { FaExclamationCircle } from "react-icons/fa"

type ErrorMessagesProps = {
  children: ReactNode;
};

export default function ErrorMessages({ children }: ErrorMessagesProps) {
    return (
        <div className="flex items-center text-red-600 text-sm mt-1 bg-red-100 p-2 rounded-lg">
          <FaExclamationCircle className="mr-2 text-red-500" />
          <span>{children}</span>
        </div>
      );
}
