
import { Modal } from "antd";
import Image from "next/image";

interface AppointmentBookingModalProps {
  isOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const AppointmentBookingModal: React.FC<AppointmentBookingModalProps> = ({
  isOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <>
      <Modal
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Image src={"/"} alt="Confirm Email" />
        <h3
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: ".5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            lineHeight: "1.875rem",
            letterSpacing: "0.05rem",
            textTransform: "uppercase",
          }}
        >
          Thank you for subscribing!
        </h3>
      </Modal>
    </>
  );
};

export default AppointmentBookingModal;
