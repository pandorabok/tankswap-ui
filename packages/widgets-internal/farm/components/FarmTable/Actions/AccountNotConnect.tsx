import { useTranslation } from "@tankswap/localization";
import { Text } from "@tankswap/uikit";
import { ActionContent, ActionTitles, StyledActionContainer } from "./styles";

const AccountNotConnect = ({
  children,
  bCakeInfoSlot,
}: {
  children: React.ReactNode;
  bCakeInfoSlot?: React.ReactElement;
}) => {
  const { t } = useTranslation();

  return (
    <StyledActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t("Start Farming")}
        </Text>
      </ActionTitles>
      <ActionContent style={{ justifyContent: "flex-start", alignItems: "center", gap: 16 }}>{children}</ActionContent>
      {bCakeInfoSlot}
    </StyledActionContainer>
  );
};

export default AccountNotConnect;
