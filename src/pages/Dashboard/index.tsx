import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import MapIcon from "@mui/icons-material/Map";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { Paper, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { BaseClickableItem } from "../../styles/Base";
function Dashboard() {
  return (
    <>
      <div
        //   TODO: 重学grid
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          margin: "0 auto",
          fontSize: "50px", // 图标的大小
          backgroundColor: "gray",
        }}
      >
        <Item title="图书馆">
          <LocalLibraryIcon fontSize="inherit" />
        </Item>
        <Item title="微波炉">
          <MicrowaveIcon fontSize="inherit" />
        </Item>
        <Item title="地图">
          <MapIcon fontSize="inherit" />
        </Item>
        <Item title="预订">
          <EventSeatIcon fontSize="inherit" />
        </Item>
        {/* https://library.unimelb.edu.au/services/book-a-room-or-computer */}
      </div>
    </>
  );
}

const Item: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  return (
    <BaseClickableItem
      as={Paper}
      style={{
        width: "80px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
      }}
    >
      {children}
      <Typography variant="body1">{title}</Typography>
    </BaseClickableItem>
  );
};

export default Dashboard;
