import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { IWebsitesType, statusType } from "../types/websites.type";

import { Field, Form, Formik } from "formik";
import InputField from "./Input";
import { websiteEditValue } from "../constants/websitesValues.constants";
import { editWebsite } from "../services/website.service";

const WebsitesTable: React.FC<{ data: IWebsitesType[] }> = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (data: statusType) => {
    return await editWebsite(data);
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Domain</TableColumn>
        <TableColumn>Created_at</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Edit</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((item: IWebsitesType) => (
          <TableRow key={item.id}>
            <TableCell>{item.domain}</TableCell>
            <TableCell>{item.created_at}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              <Button onPress={onOpen} color="primary">
                Edit
              </Button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody>
                        <Formik
                          onSubmit={}
                          initialValues={websiteEditValue}
                          enableReinitialize
                        >
                          {(props) => (
                            <Form name="filters-1">
                              <Field
                                name="status"
                                label="Status"
                                variant="bordered"
                                placeholder="Enter Status"
                                className="max-w-xs"
                                component={InputField}
                              />

                              <div>
                                <Button color="primary" type="submit">
                                  Save
                                </Button>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default WebsitesTable;
