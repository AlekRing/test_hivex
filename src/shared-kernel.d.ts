type InputType = "password" | "email" | "text";
type InputValue = string;
type InputPlaceholder = string;
type InputIsRequired = boolean;
type ButtonType = "submit" | "button" | "reset";
type ShortText = string;
type IsActiveFlag = boolean;
type IsLoadingFlag = boolean;
type IsReadOnlyFlag = boolean;
type IsValidFlag = boolean | null;
type AuthErrorMessage = { id: ShortText; explain: ShortText };
type ConsoleRequest = { action: ConsoleRequestData; success: boolean };
type ConsoleRequestData = { action: ShortText; id: ShortText };
type ConsoleResponse = {
  sublogin?: ShortText;
  account: ShortText;
  action: ShortText;
  id: ShortText;
} | null;
