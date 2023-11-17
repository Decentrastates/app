import {
  AlertCard,
  IconLinkExternal,
  Link,
  shortenAddress,
} from '@aragon/ods-old';
import {DaoAction} from '@aragon/sdk-client-common';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {useNetwork} from 'context/network';
import {useDaoDetailsQuery} from 'hooks/useDaoDetails';
import {useUpdateVerification} from 'hooks/useUpdateVerification';
import {CHAIN_METADATA} from 'utils/constants';
import {htmlIn} from 'utils/htmlIn';
import {DetailedProposal, ProposalId} from 'utils/types';
import {validateAddress} from 'utils/validators';
import {Status, StatusProps} from './Status';
// import {useClient} from 'hooks/useClient';

export interface UpdateVerificationCardProps {
  proposal?: DetailedProposal;
  proposalId?: ProposalId;
  actions?: DaoAction[];
}

export const UpdateVerificationCard: React.FC<UpdateVerificationCardProps> = ({
  actions,
}) => {
  const {t} = useTranslation();
  // const {client} = useClient();
  const {network} = useNetwork();
  const {data: daoDetails, isLoading: detailsAreLoading} = useDaoDetailsQuery();

  const daoAddress: string = daoDetails?.address || '';
  const isDaoAddressCheckLoading = detailsAreLoading;
  const isDaoAddressVerified = validateAddress(daoAddress) === true;

  // const isPluginUpdateProposal = client?.methods.isPluginUpdate(
  //   actions as DaoAction[]
  // );
  // const isOsUpdateProposal = client?.methods.isDaoUpdate(
  //   actions as DaoAction[]
  // );

  const [pluginUpdateVerification, osUpdateVerification] =
    useUpdateVerification(
      actions as DaoAction[],
      daoAddress
      // isPluginUpdateProposal,
      // isOsUpdateProposal
    );

  /** @todo Figure put how to get plugin registry update */
  const pluginRegistryAddress = daoDetails?.address || '';
  const isPluginRegistryCheckLoading =
    pluginUpdateVerification.isLoading || detailsAreLoading;
  const isPluginRegistryVerified = !!osUpdateVerification.data;

  /** @todo Figure put how to get plugin setup processor update */
  const pluginSetupProcessorAddress = daoDetails?.address || '';
  const isPluginSetupProcessorCheckLoading =
    pluginUpdateVerification.isLoading || detailsAreLoading;
  const isPluginSetupProcessorVerified = !!osUpdateVerification.data;

  const isVerificationFailed =
    (!isDaoAddressCheckLoading && !isDaoAddressVerified) ||
    (!isPluginRegistryCheckLoading && !isPluginRegistryVerified) ||
    (!isPluginSetupProcessorCheckLoading && !isPluginSetupProcessorVerified);

  function getStatusMode(
    isLoading: boolean,
    isVerified: boolean
  ): StatusProps['mode'] {
    if (isLoading) return 'loading';
    return isVerified ? 'success' : 'error';
  }

  // if (!isPluginUpdateProposal && !isOsUpdateProposal) return null;

  return (
    <Container>
      <Header>
        <Heading1>{t('update.securityCheck.title')}</Heading1>
        <Description
          dangerouslySetInnerHTML={{
            __html: htmlIn(t)('update.securityCheck.desc'),
          }}
        />
      </Header>
      <div>
        <Row>
          <Status
            mode={getStatusMode(isDaoAddressCheckLoading, isDaoAddressVerified)}
            label={t('update.securityCheck.daoAddress')}
          />
          <Link
            label={shortenAddress(daoAddress)}
            type="neutral"
            href={`${CHAIN_METADATA[network].explorer}/address/${daoAddress}`}
            iconRight={<IconLinkExternal />}
          />
        </Row>
        <Row>
          <Status
            mode={getStatusMode(
              isPluginRegistryCheckLoading,
              isPluginRegistryVerified
            )}
            label={t('update.securityCheck.pluginRegistry')}
          />
          <Link
            label={shortenAddress(pluginRegistryAddress)}
            type="neutral"
            href={`${CHAIN_METADATA[network].explorer}/address/${pluginRegistryAddress}`}
            iconRight={<IconLinkExternal />}
          />
        </Row>
        <Row>
          <Status
            mode={getStatusMode(
              isPluginSetupProcessorCheckLoading,
              isPluginSetupProcessorVerified
            )}
            label={t('update.securityCheck.pluginSetupProcessor')}
          />
          <Link
            label={shortenAddress(pluginSetupProcessorAddress)}
            type="neutral"
            href={`${CHAIN_METADATA[network].explorer}/address/${pluginSetupProcessorAddress}`}
            iconRight={<IconLinkExternal />}
          />
        </Row>
      </div>
      {isVerificationFailed && (
        <AlertCard
          mode="critical"
          title={t('update.securityCheck.alertTitle')}
          helpText={t('update.securityCheck.alertDesc')}
        />
      )}
    </Container>
  );
};

const Container = styled.div.attrs({
  className:
    'md:p-6 py-5 px-4 rounded-xl bg-neutral-0 border border-neutral-100',
})``;

const Header = styled.div.attrs({
  className: 'space-y-3 mb-4',
})``;

const Heading1 = styled.h1.attrs({
  className: 'ft-text-xl font-semibold text-neutral-800 grow',
})``;

const Description = styled.div.attrs({
  className: 'text-neutral-800 text-sm md:text-base leading-normal',
})``;

export const Row = styled.div.attrs({
  className:
    'py-2 md:py-4 xl:space-x-4 border-t border-neutral-100 ft-text-base flex items-center justify-between',
})``;
