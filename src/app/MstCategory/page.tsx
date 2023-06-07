'use client'

import {
  Flex,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Checkbox,
  Button,
  VStack,
  HStack
} from '@chakra-ui/react'

export default function MstCattegory() {
  return (
    <Flex>
      <VStack spacing="3">
        <HStack spacing="3">
          <Button>検索</Button>
          <Button>追加</Button>
          <Button>削除</Button>
        </HStack>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>選択</Th>
                <Th>カテゴリ</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td><Checkbox></Checkbox></Td>
                <Td>通信料</Td>
              </Tr>
              <Tr>
                <Td><Checkbox></Checkbox></Td>
                <Td>保険料</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Flex>
  )
}