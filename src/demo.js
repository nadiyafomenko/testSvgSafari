import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const backgroundImage =
    "https://stpubptdeus01.blob.core.windows.net/design-files/49c89a9c-55e3-4735-b332-87f55c893cbd.png";

  const wh = 100;
  const fontSize = 3.0625;
  const borderOpacity = undefined;

  return (
    <>
      <svg
        width={wh}
        height={wh}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7207 1.68066C15.2942 0.753171 16.0809 0.289425 16.9203 0.112515C17.632 -0.0375049 18.3673 -0.0375049 19.0791 0.112515C19.9184 0.289425 20.7052 0.753172 22.2786 1.68066L29.8343 6.13445C31.3618 7.03485 32.1256 7.48504 32.6775 8.11241C33.1457 8.64457 33.5009 9.26627 33.7216 9.93981C33.9817 10.7339 33.9817 11.6204 33.9817 13.3935V22.6065C33.9817 24.3796 33.9817 25.2661 33.7216 26.0602C33.5009 26.7337 33.1457 27.3554 32.6775 27.8876C32.1256 28.515 31.3618 28.9652 29.8343 29.8655L22.2786 34.3193C20.7052 35.2468 19.9184 35.7106 19.0791 35.8875C18.3673 36.0375 17.632 36.0375 16.9203 35.8875C16.0809 35.7106 15.2942 35.2468 13.7207 34.3193L6.16501 29.8655C4.63752 28.9652 3.87377 28.515 3.32183 27.8876C2.85366 27.3554 2.49846 26.7337 2.27776 26.0602C2.01758 25.2661 2.01758 24.3796 2.01758 22.6065L2.01758 13.3935C2.01758 11.6204 2.01758 10.7339 2.27776 9.93981C2.49846 9.26627 2.85366 8.64457 3.32183 8.11241C3.87377 7.48504 4.63752 7.03484 6.16501 6.13445L13.7207 1.68066Z"
          fill={
            backgroundImage
              ? `url(#${backgroundImage})`
              : "#fafafa" || "#fafafa"
          }
        />
        <path
          d="M13.9746 2.1114C15.5783 1.16609 16.2833 0.757757 17.0234 0.601766C17.6672 0.466078 18.3322 0.466078 18.9759 0.601766C19.716 0.757757 20.421 1.16609 22.0247 2.1114L29.5804 6.56519C31.1371 7.48282 31.8154 7.88946 32.3021 8.44268C32.7255 8.92399 33.0468 9.4863 33.2464 10.0955C33.4759 10.7957 33.4817 11.5865 33.4817 13.3935V22.6065C33.4817 24.4135 33.4759 25.2043 33.2464 25.9045C33.0468 26.5137 32.7255 27.076 32.3021 27.5573C31.8154 28.1105 31.1371 28.5172 29.5804 29.4348L22.0247 33.8886C20.421 34.8339 19.716 35.2422 18.9759 35.3982C18.3322 35.5339 17.6672 35.5339 17.0234 35.3982C16.2833 35.2422 15.5783 34.8339 13.9746 33.8886L6.41891 29.4348C4.86218 28.5172 4.18394 28.1105 3.69723 27.5573C3.27379 27.076 2.95252 26.5137 2.75291 25.9045C2.52347 25.2043 2.51758 24.4135 2.51758 22.6065L2.51758 13.3935C2.51758 11.5865 2.52347 10.7957 2.75291 10.0955C2.95252 9.4863 3.27379 8.92399 3.69723 8.44268C4.18394 7.88946 4.86218 7.48282 6.41891 6.56519L13.9746 2.1114Z"
          stroke={"#fafafa" || backgroundImage ? "#fafafa" : "#fff"}
          strokeOpacity={borderOpacity || backgroundImage ? 1 : 0.2}
        />
        {backgroundImage ? (
          <defs>
            <pattern
              id={backgroundImage}
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href={backgroundImage}
                preserveAspectRatio="xMidYMid slice"
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
            </pattern>
          </defs>
        ) : (
          <text
            x="50%"
            y="50%"
            fontSize={`${fontSize / (wh / 36)}rem`}
            textAnchor="middle"
            fontWeight={500}
            dominantBaseline="central"
            fill="#fff"
          >
            {"text"}
          </text>
        )}
      </svg>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <svg
              width={wh}
              height={wh}
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7207 1.68066C15.2942 0.753171 16.0809 0.289425 16.9203 0.112515C17.632 -0.0375049 18.3673 -0.0375049 19.0791 0.112515C19.9184 0.289425 20.7052 0.753172 22.2786 1.68066L29.8343 6.13445C31.3618 7.03485 32.1256 7.48504 32.6775 8.11241C33.1457 8.64457 33.5009 9.26627 33.7216 9.93981C33.9817 10.7339 33.9817 11.6204 33.9817 13.3935V22.6065C33.9817 24.3796 33.9817 25.2661 33.7216 26.0602C33.5009 26.7337 33.1457 27.3554 32.6775 27.8876C32.1256 28.515 31.3618 28.9652 29.8343 29.8655L22.2786 34.3193C20.7052 35.2468 19.9184 35.7106 19.0791 35.8875C18.3673 36.0375 17.632 36.0375 16.9203 35.8875C16.0809 35.7106 15.2942 35.2468 13.7207 34.3193L6.16501 29.8655C4.63752 28.9652 3.87377 28.515 3.32183 27.8876C2.85366 27.3554 2.49846 26.7337 2.27776 26.0602C2.01758 25.2661 2.01758 24.3796 2.01758 22.6065L2.01758 13.3935C2.01758 11.6204 2.01758 10.7339 2.27776 9.93981C2.49846 9.26627 2.85366 8.64457 3.32183 8.11241C3.87377 7.48504 4.63752 7.03484 6.16501 6.13445L13.7207 1.68066Z"
                fill={
                  backgroundImage
                    ? `url(#${backgroundImage})`
                    : "#fafafa" || "#fafafa"
                }
              />
              <path
                d="M13.9746 2.1114C15.5783 1.16609 16.2833 0.757757 17.0234 0.601766C17.6672 0.466078 18.3322 0.466078 18.9759 0.601766C19.716 0.757757 20.421 1.16609 22.0247 2.1114L29.5804 6.56519C31.1371 7.48282 31.8154 7.88946 32.3021 8.44268C32.7255 8.92399 33.0468 9.4863 33.2464 10.0955C33.4759 10.7957 33.4817 11.5865 33.4817 13.3935V22.6065C33.4817 24.4135 33.4759 25.2043 33.2464 25.9045C33.0468 26.5137 32.7255 27.076 32.3021 27.5573C31.8154 28.1105 31.1371 28.5172 29.5804 29.4348L22.0247 33.8886C20.421 34.8339 19.716 35.2422 18.9759 35.3982C18.3322 35.5339 17.6672 35.5339 17.0234 35.3982C16.2833 35.2422 15.5783 34.8339 13.9746 33.8886L6.41891 29.4348C4.86218 28.5172 4.18394 28.1105 3.69723 27.5573C3.27379 27.076 2.95252 26.5137 2.75291 25.9045C2.52347 25.2043 2.51758 24.4135 2.51758 22.6065L2.51758 13.3935C2.51758 11.5865 2.52347 10.7957 2.75291 10.0955C2.95252 9.4863 3.27379 8.92399 3.69723 8.44268C4.18394 7.88946 4.86218 7.48282 6.41891 6.56519L13.9746 2.1114Z"
                stroke={"#fafafa" || backgroundImage ? "#fafafa" : "#fff"}
                strokeOpacity={borderOpacity || backgroundImage ? 1 : 0.2}
              />
              {backgroundImage ? (
                <defs>
                  <pattern
                    id={backgroundImage}
                    patternUnits="userSpaceOnUse"
                    width="100%"
                    height="100%"
                  >
                    <image
                      href={backgroundImage}
                      preserveAspectRatio="xMidYMid slice"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                    />
                  </pattern>
                </defs>
              ) : (
                <text
                  x="50%"
                  y="50%"
                  fontSize={`${fontSize / (wh / 36)}rem`}
                  textAnchor="middle"
                  fontWeight={500}
                  dominantBaseline="central"
                  fill="#fff"
                >
                  {"text"}
                </text>
              )}
            </svg>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
