// import EmptyAccount from "./EmptyAccount";

import styled from "@emotion/styled";
import { Table } from "@mantine/core";
import { useState } from "react";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: -200px;
  margin-top: -50px;
`;
const StyledLeftFilter = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
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
const Label = styled.label`
  align-self: stretch;
  color: var(--gray-600, #7a778f);

  /* Body/Small/Regular */
  font-family: Basier Square;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
`;
const Option = styled.option`
  flex: 1 0 0;
  color: var(--gray-900, #272343);

  /* Input/Default */
  font-family: Basier Square;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledRightFilter = styled.div`
  display: flex;
  padding: 5px 16px 5px 9px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  width: 600px;
  border-radius: 4px;
  border: 1px solid var(--gray-300, #c8c6d0);
  background: var(--base-white, #fff);
`;
const TagsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;
const Tag = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--gray-100, #f1f1f4);
`;
const Text = styled.span`
  color: var(--gray-900, #272343);

  /* Body/XSmall/Regular */
  font-family: Basier Square;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;
const ClosedIcon = styled.svg`
  width: 10px;
  height: 10px;
`;

const companyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8V13"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 8V13"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 13V17"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const personIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C10.6823 10.831 9.59472 10.3468 8.79771 9.51995C8.00069 8.69307 7.55682 7.58844 7.56008 6.43999C7.56008 3.98999 9.54008 1.99999 12.0001 1.99999C12.5825 1.98948 13.1613 2.0938 13.7034 2.30697C14.2455 2.52014 14.7403 2.838 15.1595 3.2424C15.5788 3.6468 15.9143 4.12982 16.1469 4.66388C16.3795 5.19794 16.5046 5.77258 16.5151 6.35499C16.5256 6.9374 16.4213 7.51618 16.2081 8.05828C15.9949 8.60038 15.6771 9.09518 15.2727 9.51444C14.8683 9.9337 14.3852 10.2692 13.8512 10.5018C13.3171 10.7344 12.7425 10.8595 12.1601 10.87Z"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const trashIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M14 3.98668C11.78 3.76668 9.54667 3.65335 7.32 3.65335C6 3.65335 4.68 3.72002 3.36 3.85335L2 3.98668"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.6665 3.31334L5.81317 2.44001C5.91984 1.80668 5.99984 1.33334 7.1265 1.33334H8.87317C9.99984 1.33334 10.0865 1.83334 10.1865 2.44668L10.3332 3.31334"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5664 6.09335L12.1331 12.8067C12.0598 13.8534 11.9998 14.6667 10.1398 14.6667H5.85977C3.99977 14.6667 3.93977 13.8534 3.86644 12.8067L3.43311 6.09335"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.88672 11H9.10672"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.3335 8.33334H9.66683"
      stroke="#9391A4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const data = [
  {
    id: 1,
    icon: companyIcon,
    name: "Michael Sameer",
    score: "60%",
    status: "Complete",
    country: "Egypt",
    lastUpdated: "Today at 8pm",
    trashIcon,
  },
  {
    id: 2,
    icon: personIcon,
    name: "Ahmed Alaa",
    score: "80%",
    status: "In progress",
    country: "France",
    lastUpdated: "Last week",
    trashIcon,
  },
  {
    id: 3,
    icon: companyIcon,
    name: "John Doe",
    score: "75%",
    status: "In review",
    country: "USA",
    lastUpdated: "Yesterday",
    trashIcon,
  },
  {
    id: 4,
    icon: personIcon,
    name: "Alice Johnson",
    score: "90%",
    status: "Incomplete",
    country: "Canada",
    lastUpdated: "2 days ago",
    trashIcon,
  },
  {
    id: 5,
    icon: companyIcon,
    name: "Sara Smith",
    score: "85%",
    status: "Complete",
    country: "Australia",
    lastUpdated: "3 days ago",
    trashIcon,
  },
  {
    id: 6,
    icon: personIcon,
    name: "Mohamed Ali",
    score: "70%",
    status: "Incomplete",
    country: "Saudi Arabia",
    lastUpdated: "Last month",
    trashIcon,
  },
  {
    id: 7,
    icon: companyIcon,
    name: "Elena Rodriguez",
    score: "85%",
    status: "In review",
    country: "Spain",
    lastUpdated: "4 days ago",
    trashIcon,
  },
  {
    id: 8,
    icon: personIcon,
    name: "Alaa ali",
    score: "45%",
    status: "Incomplete",
    country: "Spain",
    lastUpdated: "4 days ago",
    trashIcon,
  },
  {
    id: 9,
    icon: personIcon,
    name: "Yomna Rodriguez",
    score: "100%",
    status: "Complete",
    country: "Spain",
    lastUpdated: "4 days ago",
    trashIcon,
  },
];

const Accounts = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredData = data.filter((item) => {
    switch (selectedFilter) {
      case "completed":
        return item.status.toLowerCase() === "complete";
      case "inReview":
        return item.status.toLowerCase() === "in review";
      case "incomplete":
        return item.status.toLowerCase() === "incomplete";
      case "inProgress":
        return item.status.toLowerCase() === "in progress";
      case "all":
        return true;
      default:
        return false;
    }
  });
  // Color for every status
  const getStatusBGColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case "complete":
        return "var(--green-100, #ECFAEE)";
      case "in review":
        return "var(--orange-100, #FEF5E7)";
      case "incomplete":
        return "var(--red-100, #FBE9EE)";
      case "in progress":
        return "var(--gray-100, #F1F1F4)";
      default:
        return "#FFFFFF";
    }
  };
  //Color for every Account score
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case "complete":
        return " var(--green-600, #30C048)";
      case "in review":
        return "var(--orange-600, #E28C01)";
      case "incomplete":
        return "var(--red-600, #CC1742)";
      case "in progress":
        return " var(--orange-600, #E28C01)";
      default:
        return "#FFFFFF";
    }
  };

  const rows = filteredData.map((item) => {
    return (
      <Table.Tr key={item.id} style={{ marginBottom: "20px" }}>
        <Table.Td style={{ borderBottom: "1px solid #E3E2E7" }}>
          {item.icon}
        </Table.Td>
        <Table.Td
          style={{
            borderBottom: "1px solid #E3E2E7",
            color: "#272343",
            fontFamily: "Basier Square",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
          }}
        >
          {item.name}
        </Table.Td>
        <Table.Td
          style={{
            color: getStatusColor(item.status),
            borderBottom: "1px solid #E3E2E7",
            fontFamily: "Basier Square",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
          }}
        >
          {item.score}
        </Table.Td>
        <Table.Td
          style={{
            backgroundColor: getStatusBGColor(item.status),
            padding: "4px 16px",
            borderRadius: "10px",
            borderBottom: "1px solid #E3E2E7",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {item.status}
        </Table.Td>
        <Table.Td
          style={{
            borderBottom: "1px solid #E3E2E7",
            color: "#615E7B",
            fontFamily: "Basier Square",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
          }}
        >
          {item.country}
        </Table.Td>
        <Table.Td
          style={{
            borderBottom: "1px solid #E3E2E7",
            color: "#615E7B",
            fontFamily: "Basier Square",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
          }}
        >
          {item.lastUpdated}
        </Table.Td>
        <Table.Td
          style={{
            borderBottom: "1px solid #E3E2E7",
            width: "16px",
            height: "16px",
          }}
        >
          {item.trashIcon}
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <>
      <StyledHeader>
        <StyledLeftFilter>
          <Label htmlFor="select">Filter By</Label>
          <Select
            id="select"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <Option value="all">All Accounts</Option>
            <Option value="completed">Accounts who have completed</Option>
            <Option value="inReview">Accounts who are In review </Option>
            <Option value="incomplete">Accounts who are In complete</Option>
            <Option value="inProgress">Accounts who are In progress</Option>
          </Select>
        </StyledLeftFilter>
        <StyledRight>
          <Label style={{ marginBottom: "5px" }}>Conditions</Label>
          <StyledRightFilter>
            <TagsRow>
              <Tag>
                <Text>Representatives invited</Text>
                <ClosedIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2.6416 7.35833L7.35827 2.64166"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.35827 7.35833L2.6416 2.64166"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ClosedIcon>
              </Tag>
              <Tag>
                <Text>Contacts added</Text>
                <ClosedIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2.6416 7.35833L7.35827 2.64166"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.35827 7.35833L2.6416 2.64166"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ClosedIcon>
              </Tag>
              <Tag>
                <Text>Files added</Text>
                <ClosedIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2.6416 7.35833L7.35827 2.64166"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.35827 7.35833L2.6416 2.64166"
                      stroke="#272343"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ClosedIcon>
              </Tag>
            </TagsRow>
          </StyledRightFilter>
        </StyledRight>
      </StyledHeader>
      <Table
        verticalSpacing="lg"
        style={{
          borderSpacing: "0 8px",
          marginLeft: "-75px",
          marginTop: "-30px",
        }}
      >
        <Table.Thead style={{ padding: "20px 0 " }}>
          <Table.Tr
            style={{
              color: "#7a778f",
              fontFamily: "Basier Square",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "21px",
              backgroundColor: "#F9F9FD",
            }}
          >
            <Table.Th style={{ width: "50px" }}></Table.Th>
            <Table.Th style={{ width: "50px" }}>Account</Table.Th>
            <Table.Th style={{ width: "10px" }}>Account score</Table.Th>
            <Table.Th style={{ width: "70px" }}>KYB/KYC status</Table.Th>
            <Table.Th style={{ width: "50px" }}>country</Table.Th>
            <Table.Th style={{ width: "50px" }}>Last updated</Table.Th>
            <Table.Th style={{ width: "50px" }}></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};
export default Accounts;
