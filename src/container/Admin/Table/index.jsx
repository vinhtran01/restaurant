import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TableAPI from "./../../../API/TableAPI";
import styles from "../Categories/Categories.module.css";

export default function TableAdmin() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [openDLDelete, setOpenDLDelete] = useState(false);
  const [openChangeStatus, setOpenChangeStatus] = useState(false);
  const [table, setTable] = useState([]);
  const [tableStatus, setTableStatus] = useState(0);
  const [ChairNumber, setChairNumber] = useState("");
  const [select, setSelect] = useState([]);
  const [resetData, setResetData] = useState(true);

  const handleChange = (event) => {
    setTableStatus(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await TableAPI.getAllTables();
      console.log(res);
      setTable(res);
    };
    fetchData();
  }, [resetData]);
  const handleClickOpenDelete = (item) => {
    setSelect(item);
    setOpenDLDelete(true);
  };
  const handleClickOpenChangeStatus = (item) => {
    setSelect(item);
    setChairNumber(item.numberOfChair);
    setTableStatus(item.status);
    setOpenChangeStatus(true);
  };
  const confirmDeleteTable = async () => {
    setOpenDLDelete(false);
    const res = await TableAPI.deleteTable(select.id);
    console.log(res);
    setResetData(!resetData);
  };
  const confirmChangeStatus = async () => {
    setOpenChangeStatus(false);
    const table = {
      status: tableStatus,
      numberOfChair: ChairNumber,
    };
    const res = await TableAPI.updateTable(select.id, table);
    console.log(res);
    setResetData(!resetData);
  };
  return (
    <Grid container mt={1}>
      <p className=" pt-[20px] pl-[30px] font-medium text-[26px] text-gray-700">
        Danh sách
      </p>

      <div className="px-[30px] mt-[20px] py-[15px] w-full  uppercase border-b dark:border-gray-700 bg-gray-50 ">
        <div className="w-full grid grid-cols-[0.5fr,3fr,4fr,3fr]">
          <p className="text-xs font-bold tracking-wide text-left text-gray-500">
            #
          </p>
          <p className="text-xs font-bold tracking-wide text-left text-gray-500">
            Danh sách bàn
          </p>
          <p className="text-xs font-bold tracking-wide text-left text-gray-500">
            Trạng thái
          </p>
          <p className=""></p>
        </div>
      </div>
      <div className="w-full ">
        {table?.map((item, index) => (
          <div className="w-full px-[30px]  grid grid-cols-[0.5fr,3fr,4fr,3fr] py-[15px] border-b border-gray-300">
            <div className="">{index + 1}</div>
            <div className="">Table {item.id}</div>
            <div className="text-gray-400">
              {item.status === 0 ? "" : " Bàn không khả dụng"}
            </div>
            <div className="flex justify-end">
              <Stack direction="row" spacing={1} position="absolute">
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  onClick={() => handleClickOpenChangeStatus(item)}
                >
                  Sửa T.thái
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => handleClickOpenDelete(item)}
                >
                  Xóa
                </Button>
              </Stack>
            </div>
          </div>
        ))}
      </div>
      {/* {table?.map((item, index) => (
        <Grid
          key={index}
          className={`${styles.BoxCategory} ${
            item.status === 0 ? null : styles.tableNotAvailable
          }`}
          item
          m={1}
        >
          <Typography width={isMobile ? 200 : "100%"}>
            {index + 1}, {`Table ${item.id}`}{" "}
            {item.status === 0 ? "" : ", Bàn không khả dụng"}
          </Typography>
          <Stack direction="row" spacing={1} position="absolute" right="1%">
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={() => handleClickOpenChangeStatus(item)}
            >
              Sửa T.thái
            </Button>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={() => handleClickOpenDelete(item)}
            >
              Xóa
            </Button>
          </Stack>
        </Grid>
      ))} */}
      {/* Dialog for delete Table */}
      <Dialog open={openDLDelete} onClose={() => setOpenDLDelete(false)}>
        <DialogTitle>{"Xóa thông tin bàn " + select.id}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn chắc chắn muốn xóa bàn {select.id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDLDelete(false)}>Disagree</Button>
          <Button onClick={confirmDeleteTable} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog for edit status */}
      <Dialog
        open={openChangeStatus}
        onClose={() => setOpenChangeStatus(false)}
      >
        <DialogTitle>{"Sửa trạng thái bàn: " + select.id}</DialogTitle>
        <DialogContent>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="StatusTable">Trạng thái bàn</InputLabel>
            <Select
              fullWidth
              labelId="StatusTable"
              value={tableStatus}
              onChange={handleChange}
              label="Trạng thái bàn"
              sx={{ mb: 3 }}
            >
              <MenuItem value={0}>Bàn đang khả dụng</MenuItem>
              <MenuItem value={1}>Bàn không khả dụng</MenuItem>
            </Select>
            <TextField
              variant="standard"
              label="Số ghế"
              defaultValue={ChairNumber}
              fullWidth
              onChange={(e) => setChairNumber(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDLDelete(false)}>Disagree</Button>
          <Button onClick={confirmChangeStatus} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
