import React from 'react';
import {storiesOf} from '@storybook/react';
import {
    Badge, Container, FooterButton, Section, SectionContent, ActionLink, Text, Table,
    MainContainer,
    LinkHash, AddButton
} from "../..";
import {
    ContainerRegister,
    Content, CreateButton,
    ErrorMessage,
    FieldsTable,
    Label,
    PageTitle,
    Panel,
    RemoveButton,
    SideBar
} from "../newregistry";
import {RightContainer} from "../..";
import {ParamRow} from "../newregistry/ParamRow/ParamRow";
import {WideInput, WideSelect} from "../newregistry/WideInput/WideInput";
import {Description} from "../newregistry/Description/Description";

storiesOf('Chaingear_NewDatabase', module)
    .add('create_db', () => {
        const contractName = 'contract name';
        const message = 'message';
        const inProgress = false;
        const contracts = [];
        const type = '';
        const beneficiaries = [
            {
                address: '0x000F3754f028c704FDCe4e8ab9aAdba220f39618',
                stake: 1,
                share: 100,
            },
            {
                address: '0x379A23083a58B2b89F4dD307aD55F732BB5A20Ef',
                stake: 1,
                share: 100,
            }
        ];
        const databaseId = null;

        const DatabaseSource = 'Database source code';

        const exist = false;
        const benCount = 1;
        const canCreate = true;

        const onContractNameChange = undefined;

        return (
            <MainContainer>
                <PageTitle>New database creation</PageTitle>
                <ContainerRegister>
                    <SideBar>

                        <Label>Input</Label>
                        <Panel
                            title='General Parameters'
                        >
                            <ParamRow>
                                <WideInput
                                    placeholder='Name'
                                    defaultValue=''
                                />
                            </ParamRow>
                            <ParamRow>
                                <WideInput
                                    /*
                                                                        ref='symbol'
                                    */
                                    defaultValue=''
                                    placeholder='Symbol'
                                />
                            </ParamRow>
                            <ParamRow>
                                <WideSelect
                                    /*
                                                                        ref='databaseVersion'
                                    */
                                >
                                    <option value=''>Version</option>
                                    <option value='V1'>V1 (Basic Database)</option>
                                </WideSelect>
                            </ParamRow>
                            <ParamRow>
                                <Description>
                                    <b>Description:</b> One morning, when Gregor Samsa woke from troubled dreams, he
                                    found himself transformed in his bed into a horrible vermin. He lay on his
                                    armour-like back, and if he lifted his head a little he could see his brown belly,
                                    slightly domed and divided by arches.
                                </Description>
                            </ParamRow>
                        </Panel>

                        <Panel title='Beneficiaries (Optional)' noPadding>
                            <FieldsTable>
                                <tbody>
                                {
                                    beneficiaries.map(ben => (
                                        <tr key={ben.address}>
                                            <td style={{
                                                    overflow: 'hidden',
                                                    width: 120
                                                }}
                                            >
                                                <LinkHash noCopy noPadding value={ben.address}/>
                                            </td>
                                            <td style={{
                                                textAlign: 'end',
                                                width: 70
                                            }}>{ben.stake}</td>
                                            <td>{ben.share}</td>
                                            <td>
                                                <RemoveButton
                                                    /*
                                                                                                        onClick={() => this.removeBeneficiary(ben.address)}
                                                    */
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td>
                                        <WideInput
                                            /*
                                                                                       ref='benAddress'
                                            */
                                            placeholder='Address'
                                        />
                                    </td>
                                    <td>
                                        <WideInput
                                            /*
                                                                                        ref='benStake'
                                            */
                                            /*
                                                                                           onChange={this.onStakeChange}
                                            */
                                            placeholder='Stake'/>
                                    </td>
                                    <td>
                                        <span
                                            /*
                                                                                        ref='benShare'
                                            */
                                            placeholder='Share'>0</span> <span>%</span>
                                    </td>
                                    <td>
                                        <AddButton
                                            /*
                                                                                        onClick={this.addBeneficiary}
                                            */
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </FieldsTable>
                        </Panel>
                    </SideBar>

                    <Content>
                        <Label color='#3fb990'>Database code</Label>
                        <div>
                            {DatabaseSource}
                        </div>
                        {(type === 'error' && message) && <ErrorMessage>{message}</ErrorMessage>}
                    </Content>
                </ContainerRegister>
                <RightContainer>
                    {databaseId ? (
                        <span>
                            <ActionLink to={`/databases/${databaseId}`}>Go to database</ActionLink>
                            <ActionLink to={`/schema/${databaseId}`}>Go to schema definition</ActionLink>
                        </span>
                    ) : (
                        <CreateButton disabled={!canCreate}
                            /*
                                                                  onClick={this.createDatabase}
                            */
                        >
                            Next
                        </CreateButton>
                    )}
                </RightContainer>
            </MainContainer>
        );
    });
