import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { COLORS } from "../../utils/palette";
import { buttonAnimation, shadow } from "../../utils/keyframes";
import Span from "../../ui-components/Span/Span";
import Paragraph from "../../ui-components/Paragraph/Paragraph";
import { useState } from "react";
import { Close } from "../../utils/icon";
import Subtitle from "../../ui-components/Subtitle/Subtitle";
import CheckIcon from "../../ui-components/CheckIcon/CheckIcon";
import { useTranslation } from "react-i18next";

interface FormContactProps {
  toggleModal: () => void;
  darkMode?: boolean;
}

const Modal = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;
const Overlay = styled(Modal)`
  background: rgba(49, 49, 49, 0.8);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
`;
const ModalContent = styled.div<{ $darkmode?: boolean }>`
  position: absolute;
  top: 45%;
  left: 50%;
  min-width: 40%;
  min-height: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) =>
    props.$darkmode ? COLORS.DARKSLATE[100] : COLORS.BLUISH[100]};
  z-index: 2;
  padding: 30px;
  box-shadow: ${shadow};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  p {
    font-size: var(--12px);
    align-self: flex-start;
    padding-left: 5%;
  }
`;

const Input = styled.input<{ $darkmode?: boolean; $haserror?: boolean }>`
  width: 90%;
  height: 35px;
  padding: 7px;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.$haserror
      ? `1px solid ${COLORS.TANGERINE[50]}`
      : `1px solid ${COLORS.SKY[100]}`};
  color: ${(props) =>
    props.$darkmode ? COLORS.WHITE[100] : COLORS.NIGHT[100]};

  &::placeholder {
    color: ${(props) => (props.$darkmode ? COLORS.WHITE[50] : "#8080806f")};
  }

  &:focus {
    border: 2px solid ${COLORS.SKY[100]};
  }
`;

const Textarea = styled.textarea<{ $darkmode?: boolean; $haserror?: boolean }>`
  max-width: 100%;
  min-width: 90%;
  width: 90%;
  min-height: 100px;
  margin-top: 30px;
  padding: 7px;
  outline: none;
  border-radius: 5px;
  /* padding-top: 30px; */
  background-color: ${(props) =>
    props.$darkmode ? "transparent" : COLORS.WHITE[100]};
  color: ${(props) =>
    props.$darkmode ? COLORS.WHITE[100] : COLORS.NIGHT[100]};
  border: ${(props) =>
    props.$haserror
      ? `1px solid ${COLORS.TANGERINE[50]}`
      : `1px solid ${COLORS.SKY[100]}`};

  &::placeholder {
    color: ${(props) => (props.$darkmode ? COLORS.WHITE[50] : "#8080806f")};
  }

  &:focus {
    border: 2px solid ${COLORS.SKY[100]};
  }
`;

const SubmitButton = styled.button<{ $haserror?: boolean }>`
  width: 50%;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 18px;
  background: linear-gradient(#ff6100, #ff5050);
  box-shadow: 0 2px 12px -3px #ff5050;
  animation: ${buttonAnimation} 4s 3s infinite ease-in-out;
  opacity: 0.9;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: ${(props) => (props.$haserror ? "not-allowed" : "pointer")};

  span {
    color: ${COLORS.WHITE[100]};
  }
`;

const ErrorMessage = styled.p`
  color: ${COLORS.TANGERINE[50]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FormContact = ({
  toggleModal,
  darkMode,
}: FormContactProps): JSX.Element => {
  const { t } = useTranslation();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_email: "",
      object: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    const params = {
      user_email: data.user_email,
      object: data.object,
      message: data.message,
    };

    emailjs
      .send("service_1acce2u", "template_0t4weft", params, {
        publicKey: "bG7uvHiAxi8i02xlZ",
      })
      .then(() => {
        console.log("email sent succefully");
        setIsMessageSent(true);
        reset();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Modal>
      <Overlay onClick={toggleModal} />
      <ModalContent $darkmode={darkMode}>
        <CloseButton onClick={toggleModal}>
          <Close fill={darkMode ? COLORS.WHITE[50] : COLORS.TANGERINE[100]} />
        </CloseButton>
        {isMessageSent ? (
          <Wrapper>
            <CheckIcon darkMode={darkMode} />
            <Paragraph text="Message envoyé avec succès !" />
          </Wrapper>
        ) : (
          <>
            <Subtitle text="me contacter" />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("user_email", {
                  required: t("errors.invalid"),
                })}
                name="user_email"
                type="email"
                placeholder="Email"
                $haserror={!!errors.user_email}
                $darkmode={darkMode}
              />
              <ErrorMessage>{errors.user_email?.message}</ErrorMessage>
              <Input
                {...register("object", {
                  required: t("errors.empty"),
                })}
                name="object"
                type="text"
                placeholder="Object"
                $haserror={!!errors.object}
                $darkmode={darkMode}
              />
              <ErrorMessage>{errors.object?.message}</ErrorMessage>
              <Textarea
                {...register("message", {
                  required: t("errors.empty"),
                })}
                name="message"
                placeholder="Message.."
                $haserror={!!errors.message}
                $darkmode={darkMode}
              ></Textarea>
              <ErrorMessage>{errors.message?.message}</ErrorMessage>
              <SubmitButton type="submit">
                <Span text="ENVOYER" />
              </SubmitButton>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default FormContact;
