
import PopImg from "../../assets/input-pop.png";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
interface popHintProps {
  placement: NotificationPlacement;
  duration: number;
  top: number;
}

export function PopHint({ placement, duration, top = 100 }: popHintProps) {
  const [api] = notification.useNotification({
    placement: "top",
    top: top,
  });

  api.open({
    message: null,
    duration: duration,
    description: <img src={PopImg} alt="popimg" width={200} />,
    placement,
  });
}
