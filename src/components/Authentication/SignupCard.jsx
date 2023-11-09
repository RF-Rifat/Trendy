import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function LoginCard() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleView = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        {isSignUp && <Input label="Confirm Password" size="lg" />}
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <Typography
            as="a"
            href="#signup"
            onClick={toggleView}
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </Typography>
        </Typography>
      </CardFooter>

      {/* ... other social login buttons ... */}
    </Card>
  );
}
