'use client'

import { Badge, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react'

import { Fragment, useState } from 'react'

import { Offer } from '@/app/model/offer'

export function ListOfOffers (props: {
  offers: Offer[]
}) {
  const { offers } = props

  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})

  return (
    <Card>
      <Flex justifyContent='start' className='space-x-2'>
        <Title>Ofertas de trabajo de InfoJobs</Title>
        <Badge color='gray'>{offers.length}</Badge>
      </Flex>

      <Text className='mt-2'>Las últimas ofertas de trabajo</Text>

      <Table className='mt-6'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Puesto</TableHeaderCell>
            <TableHeaderCell>Provincia</TableHeaderCell>
            <TableHeaderCell>Ciudad</TableHeaderCell>
            <TableHeaderCell>Experiencia</TableHeaderCell>
            <TableHeaderCell>Salario</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {offers.map(item => (
            <Fragment key={item.id}>
              <TableRow
                className='transition-colors cursor-pointer hover:bg-sky-300' onClick={() => {
                  window.open(item.link, '_blank')
                }}
              >
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.province}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.experienceMin}</TableCell>
                <TableCell>{item.salaryDescription}</TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
