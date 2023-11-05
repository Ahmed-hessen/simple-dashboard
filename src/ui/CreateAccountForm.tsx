import styled from "@emotion/styled";
import { ReactNode } from "react";

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

const StyledForm = styled.form`
  display: flex;
  width: 500px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  background: var(--base-white, #fff);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1),
    0px 5px 11px 0px rgba(0, 0, 0, 0.1), 0px 20px 20px 0px rgba(0, 0, 0, 0.09),
    0px 46px 27px 0px rgba(0, 0, 0, 0.05), 0px 81px 32px 0px rgba(0, 0, 0, 0.01),
    0px 126px 35px 0px rgba(0, 0, 0, 0);
`;
const StyledHeader = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid var(--gray-200, #e3e2e7);
`;

const StyledTitle = styled.div`
  color: var(--gray-900, #272343);

  /* Heading/H4 */
  font-family: Basier Square;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledRadioOptions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
const Radio = styled.input`
  display: flex;
  align-items: center;
  gap: 8px;
  accent-color: #3fadad;
`;
const StyledSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;
const Select = styled.select`
  display: flex;
  padding: 10px 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--gray-300, #c8c6d0);
  background: var(--base-white, #fff);
`;
const Option = styled.option`
  color: var(--gray-900, #272343);

  /* Input/Default */
  font-family: Basier Square;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
const Label = styled.label`
  color: var(--gray-600, #7a778f);

  /* Body/Small/Regular */
  font-family: Basier Square;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;
const Input = styled.input`
  display: flex;
  padding: 10px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--gray-300, #c8c6d0);
  background: var(--base-white, #fff);
`;
const StyledFooter = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  border-top: 1px solid var(--gray-200, #e3e2e7);
`;

const Button = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--yellow-500, #ffd803);
  color: var(--gray-900, #272343);

  /* Button/Large */
  font-family: Basier Square;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
`;
const Error = styled.span`
  font-size: 1rem;
  color: red;
`;

const CreateAccountForm = () => {
  interface FormData {
    selectedOption: string;
    personType: string;
    company: string;
    companyName: string;
    registration: string;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <StyledHeader>
          <StyledTitle>Add a new account</StyledTitle>
        </StyledHeader>
        <StyledRadioOptions>
          <Radio
            type="radio"
            id="personType"
            value="Private Person"
            {...register("personType")}
          />
          <Label htmlFor="personType">Private person</Label>
          <Radio
            type="radio"
            id="company"
            value="Company"
            {...register("company")}
          />
          <Label htmlFor="company">Company</Label>
        </StyledRadioOptions>
        <StyledSelectDiv>
          <Label htmlFor="selectedOption">Country of registration</Label>
          <Select
            id="selectedOption"
            {...register("selectedOption", {
              required: "This field is required",
            })}
            defaultValue="value"
          >
            <Option value="value">Value</Option>
            <Option value="Egypt">Egypt</Option>
            <Option value="Palestine">Palestine</Option>
          </Select>
          {errors?.selectedOption?.message && (
            <Error>{errors.selectedOption.message as ReactNode}</Error>
          )}
        </StyledSelectDiv>
        <StyledInputDiv>
          <Label htmlFor="companyName">Company name</Label>
          <Input
            type="text"
            id="companyName"
            placeholder="Search company"
            {...register("companyName", {
              required: "this field is required",
            })}
          />
          {errors?.companyName?.message && (
            <Error>{errors.companyName.message as ReactNode}</Error>
          )}
        </StyledInputDiv>
        <StyledInputDiv>
          <Label htmlFor="registration">Registration code</Label>
          <Input
            type="text"
            id="registration"
            {...register("registration", {
              required: "this field is required",
            })}
          />
          {errors?.registration?.message && (
            <Error>{errors.registration.message as ReactNode}</Error>
          )}
        </StyledInputDiv>
        <StyledFooter>
          <Button type="submit">Add Account</Button>
        </StyledFooter>
      </StyledForm>
      ;
    </>
  );
};

export default CreateAccountForm;
